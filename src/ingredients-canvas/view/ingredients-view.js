import { View } from "../../entities/abstract";

export class IngredientsView extends View {
    constructor(element) {
        super(element)
        this.wrapper = this.element.querySelector('.ingredients-wrapper')
    }
    render({type, payload}) {
        if(type !== 'INGREDIENTS') return;
        const allIngredients = this.wrapper.querySelectorAll('.ingredient')
        allIngredients.forEach(ingredient => ingredient.remove())
        payload.forEach(ingredient => {
            const elem = document.createElement('div');
            elem.classList.add('ingredient');
            elem.classList.add('orange');
            elem.innerText = ingredient;
            this.wrapper.append(elem)
        })

    }
}