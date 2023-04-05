import { Observer } from "../../utilits";
import { CreateRecipeController } from "../controller/create-recipe-controller";
import { CreateRecipeModel } from "../model/create-recipe-model";
import { CreateRecipeView } from "../view/create-recipe-view";

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