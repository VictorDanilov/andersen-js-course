import { View } from "../../entities/abstract";

export class RecipesCanvasView extends View {
    constructor(element) {
        super(element)
    }
    render(data) {
        console.log(data)
            const all = this.element.querySelectorAll('p');
            all.forEach(elem => elem.remove())
        data.forEach(recipe => {

            const p = document.createElement('p');
            p.innerText = recipe.title;
            this.element.append(p);
        })
    }
}