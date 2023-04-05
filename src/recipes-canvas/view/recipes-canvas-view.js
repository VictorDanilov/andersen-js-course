import { View } from "../../entities/abstract";
import { Reicpe } from "../../entities/recipe/recipe";

export class RecipesCanvasView extends View {
    constructor(element) {
        super(element)
    }
    render({type, payload}) {
        const list = this.element.querySelector('.list')
        console.log(list)
        if(type !== 'RECIPES_MODEL') return;
        console.log(payload)
            const all = this.element.querySelectorAll('.recipe');
            all.forEach(elem => elem.remove())
        payload.forEach(recipe => {
            list.append(new Reicpe().render(recipe))
        })
    }
}