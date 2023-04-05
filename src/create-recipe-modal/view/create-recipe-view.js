import { View } from "../../entities/abstract";

export class CreateRecipeView extends View {
    constructor(element) {
        super(element)
    }
    render({type, payload}) {
        if(type !== 'CREATE_MODEL') return;
        if(payload) {
            this.element.classList.add('open');
        } else {
            this.element.classList.remove('open');
        }
    }
} 