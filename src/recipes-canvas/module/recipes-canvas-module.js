import { RecipesCanvasController } from "../";
import { RecipesCanvasModel } from "../";
import { RecipesCanvasView } from "../";

export class RecipesCanvasModule {
    constructor(observer) {
        this.recipesWrapper = document.querySelector('.recipes-canvas');
        this.recipesView = new RecipesCanvasView(this.recipesWrapper);
        this.recipesModel = new RecipesCanvasModel(observer);
        this.recipesController = new RecipesCanvasController(this.recipesWrapper, this.recipesModel);
    }
    subscribe() {
        return [this.recipesController, this.recipesView];
    }

}