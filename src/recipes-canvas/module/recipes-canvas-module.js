import { RecipesCanvasController, RecipesCanvasModel, RecipesCanvasView } from "../";
import { Module } from "../../entities/abstract";

export class RecipesCanvasModule extends Module {
    constructor(observer) {
        super()
        this.recipesWrapper = document.querySelector('.recipes-canvas');
        this.recipesView = new RecipesCanvasView(this.recipesWrapper);
        this.recipesModel = new RecipesCanvasModel(observer);
        this.recipesController = new RecipesCanvasController(this.recipesWrapper, this.recipesModel);
    }
    subscribe() {
        return [this.recipesController, this.recipesView];
    }

}