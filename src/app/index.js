import { CreateRecipeModel } from "../create-recipe-modal";
import { CreateRecipeController } from "../create-recipe-modal";
import { MyEventEmitter, Observer } from "../utilits";
import { RecipesCanvasController, RecipesCanvasView } from "../recipes-canvas";
import { CreateRecipeView } from "../create-recipe-modal";
import { RecipesCanvasModel } from "../recipes-canvas/model/recipes-canvas-model";
/* Контроллеры взаимодействуют между собой через ИвентЭмиттер */
/* Контроллеры работают с интерфейсом моделей */
/* Модели взаимодействуют с представлениями через патерн наблюдатель */
export default class App {
    constructor() {
        /* Инициализация приложения */
        this.eventEmitter = new MyEventEmitter();
        this.modal = document.querySelector('.create-recipe-modal');
        this.recipesWrapper = document.querySelector('.recipes-canvas');
        /* Холст со списком рецептов */
        this.recipesView = new RecipesCanvasView(this.recipesWrapper);
        this.recipesCanvasObserver = new Observer([this.recipesView]);
        this.recipesModel = new RecipesCanvasModel(this.recipesCanvasObserver);
        this.recipesController = new RecipesCanvasController(this.recipesWrapper, this.recipesModel);
        /* Модальное окно создания нового рецепта */
        this.createRecipeView = new CreateRecipeView(this.modal);
        this.createRecipeObserver = new Observer([this.createRecipeView]);
        this.createRecipeModel = new CreateRecipeModel(this.createRecipeObserver);
        this.createRecipeController = new CreateRecipeController(this.modal, this.createRecipeModel);
        /* Рассылка всем контроллерам ИвентЭмиттера */
        this.appControllersObserver = new Observer([this.createRecipeController, this.recipesController]);
        this.appControllersObserver.broadcastData(this.eventEmitter);
    }
}