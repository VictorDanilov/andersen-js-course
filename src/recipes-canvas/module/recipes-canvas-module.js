import { Observer } from "../../utilits";
import { RecipesCanvasController } from "../controller/recipes-canvas-controller";
import { RecipesCanvasModel } from "../model/recipes-canvas-model";
import { RecipesCanvasView } from "../view/recipes-canvas-view";

export class RecipesCanvasModule {
    constructor(observer) {
        this.recipesWrapper = document.querySelector('.recipes-canvas');
        this.recipesView = new RecipesCanvasView(this.recipesWrapper);
        //observer.addSubscriber(this.recipesView)
        this.recipesModel = new RecipesCanvasModel(observer);
        this.recipesController = new RecipesCanvasController(this.recipesWrapper, this.recipesModel);
    }
    subscribe() {
        return [this.recipesController, this.recipesView];
    }

}