
class Ingredient {
    constructor() {}
    render(text) {
        const elem = document.createElement('div')
        elem.classList.add('ingredient');
        elem.innerText = text;
        return elem;
        
    }
}
export class Reicpe {
    constructor() {}
    render({title, components}) {
        const li = document.createElement('li')
        const recipe = document.createElement('div');
        recipe.classList.add('recipe')
        const label = document.createElement('h4');
        const textComponents = document.createElement('p');
        textComponents.innerText = 'Ингредиенты:';
        const componentsWrapper = document.createElement('div');
        componentsWrapper.classList.add('ingredients-list')
        components.forEach(ingredient => {
            componentsWrapper.append(new Ingredient().render(ingredient))
        })


        label.innerText = title
        recipe.append(label)
        recipe.append(textComponents)
        recipe.append(componentsWrapper)


        li.append(recipe)
        return li
    }
}