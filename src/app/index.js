import { AppLocalStorage, MyEventEmitter, Observer } from "../utilits";
import { CreateRecipeModule } from "../create-recipe-modal/";
import { RecipesCanvasModule } from "../recipes-canvas/";
import { IngredientsModule } from "../ingredients-canvas/";
/* Контроллеры взаимодействуют между собой через ИвентЭмиттер */
/* Контроллеры работают с интерфейсом моделей */
/* Модели взаимодействуют с представлениями через патерн наблюдатель */
export default class App {
    constructor() {
        /* Инициализация приложения */
        this.appObserver = new Observer();
        this.appEventEmitter = new MyEventEmitter();
        this.appLocalStorage = new AppLocalStorage();
        /* Холст со списком рецептов */
        this.recipesModule = new RecipesCanvasModule(this.appObserver);
        /* Холст со списком ингредиентов */
        this.ingredientsModule = new IngredientsModule(this.appObserver);
        /* Модальное окно создания нового рецепта */
        this.createRecipeModule = new CreateRecipeModule(this.appObserver);
        /* Подписываем на события. */
        this.appObserver.addSubscriber([
            ...this.recipesModule.subscribe(), //вернет массив подписчиков из View и Controller
            ...this.createRecipeModule.subscribe(), 
            ...this.ingredientsModule.subscribe(),  
            this.appLocalStorage,        
        ])
        /* Рассылка всем контроллерам ИвентЭмиттера */
        this.appObserver.broadcastData({type: 'EVENT_EMITTER', payload: this.appEventEmitter});
        this.appLocalStorage.getItem();
    }
}