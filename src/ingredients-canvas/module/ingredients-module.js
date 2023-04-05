import { IngredientsController } from "../";
import { IngredientsModel } from "../";
import { IngredientsView } from "../";

export class IngredientsModule {
    constructor(observer) {
        this.ingredientsWrapper = document.querySelector('.ingredients');
        this.model = new IngredientsModel(observer);
        this.controller = new IngredientsController(this.ingredientsWrapper, this.model);
        this.view = new IngredientsView(this.ingredientsWrapper);

    }
    subscribe() {
        return [this.controller, this.view];
    }
}