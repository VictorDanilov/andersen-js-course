import { CreateRecipeController, CreateRecipeModel, CreateRecipeView } from "../";
import { Module } from "../../entities/abstract";

export class CreateRecipeModule extends Module {
    constructor (observer) {
        super()
        this.modal = document.querySelector('.create-recipe-modal');
        this.createRecipeView = new CreateRecipeView(this.modal);
        this.createRecipeModel = new CreateRecipeModel(observer);
        this.createRecipeController = new CreateRecipeController(this.modal, this.createRecipeModel);
    }
    subscribe() {
        return [this.createRecipeController, this.createRecipeView];
    }
}