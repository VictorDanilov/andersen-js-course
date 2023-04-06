export class Ingredient {
    constructor() {}
    render(text) {
        const ingredient = document.createElement('div');
        ingredient.classList.add('craft-canvas-ingredient');
        ingredient.innerText = text;
        return ingredient;
    }
}