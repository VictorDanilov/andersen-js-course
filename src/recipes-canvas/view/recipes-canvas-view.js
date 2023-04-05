import { View } from "../../entities/abstract";

export class RecipesCanvasView extends View {
    constructor(element) {
        super(element)
    }
    render({type, payload}) {
        if(type !== 'RECIPES_MODEL') return;
        console.log(payload)
            const all = this.element.querySelectorAll('p');
            all.forEach(elem => elem.remove())
        payload.forEach(recipe => {

            const p = document.createElement('p');
            p.innerText = recipe.title;
            this.element.append(p);
        })
    }
}