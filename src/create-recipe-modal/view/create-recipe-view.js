import { View } from "../../entities/abstract";

export class CreateRecipeView extends View {
    constructor(element) {
        super(element)
    }
    render(state) {
        if(state.isOpen) {
            this.element.classList.add('open');
        } else {
            this.element.classList.remove('open');
        }
    }
} 