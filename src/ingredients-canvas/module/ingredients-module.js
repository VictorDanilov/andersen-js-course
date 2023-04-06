import { IngredientsController, IngredientsModel, IngredientsView } from "../";
import { Module } from "../../entities/abstract";

export class IngredientsModule extends Module {
    constructor(observer) {
        super()
        this.ingredientsWrapper = document.querySelector('.ingredients');
        this.model = new IngredientsModel(observer);
        this.controller = new IngredientsController(this.ingredientsWrapper, this.model);
        this.view = new IngredientsView(this.ingredientsWrapper);

    }
    subscribe() {
        return [this.controller, this.view];
    }
}