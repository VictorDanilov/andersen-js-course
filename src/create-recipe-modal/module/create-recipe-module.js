import { CreateRecipeController } from "../";
import { CreateRecipeModel } from "../";
import { CreateRecipeView } from "../";

export class CreateRecipeModule {
    constructor (observer) {
        this.modal = document.querySelector('.create-recipe-modal');
        this.createRecipeView = new CreateRecipeView(this.modal);
        this.createRecipeModel = new CreateRecipeModel(observer);
        this.createRecipeController = new CreateRecipeController(this.modal, this.createRecipeModel);
    }
    subscribe() {
        return [this.createRecipeController, this.createRecipeView];
    }
}