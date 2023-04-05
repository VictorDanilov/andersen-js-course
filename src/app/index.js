import { AppLocalStorage, MyEventEmitter, Observer } from "../utilits";
import { CreateRecipeModule } from "../create-recipe-modal/module/create-recipe-module";
import { RecipesCanvasModule } from "../recipes-canvas/module/recipes-canvas-module";
/* Контроллеры взаимодействуют между собой через ИвентЭмиттер */
/* Контроллеры работают с интерфейсом моделей */
/* Модели взаимодействуют с представлениями через патерн наблюдатель */
export default class App {
    constructor() {
        /* Инициализация приложения */
        this.appObserver = new Observer();
        this.eventEmitter = new MyEventEmitter();
        this.appLocalStorage = new AppLocalStorage
        /* Холст со списком рецептов */
        this.recipesModule = new RecipesCanvasModule(this.appObserver);
        /* Модальное окно создания нового рецепта */
        this.createRecipeModule = new CreateRecipeModule(this.appObserver);
        /* Подписываем на события. */
        this.appObserver.addSubscriber([
            ...this.recipesModule.subscribe(), //вернет массив подписчиков View и Controller
            ...this.createRecipeModule.subscribe(), //вернет массив подписчиков View и Controller
            this.appLocalStorage,        
        ])
        /* Рассылка всем контроллерам ИвентЭмиттера */
        this.appObserver.broadcastData({type: 'EVENT_EMITTER', payload: this.eventEmitter});
        this.appLocalStorage.getItem();
    }
}