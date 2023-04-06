import { View } from "../../entities/abstract";
import { Ingredient } from "../../entities/ingredient/ingredient";

export class CraftView extends View {
    constructor(element) {
        super(element)

    }
    render({type, payload}) {
        if(type !== 'CRAFT_MODEL') return;
        const wrapper = this.element.querySelector('.craft-wrapper')
        const all = wrapper.querySelectorAll('.craft-canvas-ingredient')
        all.forEach(elem => elem.remove())
        payload.forEach(ingredient => {

            wrapper.append(new Ingredient().render(ingredient))
        })
    }
}