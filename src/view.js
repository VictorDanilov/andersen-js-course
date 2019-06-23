import { drop, allowDrop, FindFreeCell, createListItem } from './helpers';
import { EventEmitter } from './EventEmitter';

class View extends EventEmitter {
  constructor() {
    super();
    this.buttonItem = document.getElementById('buttonItem');
    this.buttonRepice = document.getElementById('buttonRepice');
    this.inputRecipe = document.getElementById('inputRecipeName');
    this.inputItem = document.getElementById('inputItemName');
    this.listItems = document.getElementsByClassName('itemCell');
    this.listRecipes = document.getElementsByClassName('recipeCell');
    this.listCraft = document.getElementsByClassName('craftCell');
    this.trashcan = document.querySelector('img');
    this.addEventsListener();
  }

  craftItem(item) {
    if (item === null) alert('Несоответствие рецепту.');
    else {
      const newItem = createListItem(item);
      newItem.className = 'item';
      FindFreeCell(this.listItems).appendChild(newItem);
    }
  }

  craftItemHandler() {
    const recipe = document.querySelector('.craftCell p[class = "recipe"]');
    const items = document.querySelectorAll('.craftCell p[class = "item"]');
    if (recipe && items) this.emit('craftItem', { recipe, items });
    else alert('Невозможно создать предмет');
  }

  craftRecipeHandler() {
    const recipeName = this.inputRecipe.value;
    const itemName = this.inputItem.value;
    const items = document.querySelectorAll('.craftCell p[class = "item"]');
    if (recipeName && items) this.emit('craftRecipe', { recipeName, itemName, items });
    else alert('Невозможно создать рецепт');
  }

  deleteHandler(ev) {
    ev.preventDefault();
    this.emit('delete', ev);
  }

  deleteElement(ev) {
    const data = ev.dataTransfer.getData('text');
    document.getElementById(data).parentElement.removeChild(document.getElementById(data));
  }

  addEventsListener() {
    this.buttonItem.addEventListener('click', this.craftItemHandler.bind(this));
    this.buttonRepice.addEventListener('click', this.craftRecipeHandler.bind(this));
    this.trashcan.addEventListener('drop', this.deleteHandler.bind(this));
    this.trashcan.addEventListener('dragover', allowDrop);
    Array.from(this.listItems).forEach(cell => {
      cell.addEventListener('drop', drop);
      cell.addEventListener('dragover', allowDrop);
    });
    Array.from(this.listRecipes).forEach(cell => {
      cell.addEventListener('drop', drop);
      cell.addEventListener('dragover', allowDrop);
    });
    Array.from(this.listCraft).forEach(cell => {
      cell.addEventListener('drop', drop);
      cell.addEventListener('dragover', allowDrop);
    });
  }

  craftRecipe(recipe) {
    const newItem = createListItem(recipe);
    newItem.className = 'recipe';
    newItem.setAttribute('info', recipe.ingredients.toString());
    FindFreeCell(this.listRecipes).appendChild(newItem);
  }

  show(items, recipes) {
    items.forEach(item => {
      const listItem = createListItem(item);
      listItem.className = 'item';
      FindFreeCell(this.listItems).appendChild(listItem);
    });
    recipes.forEach(recipe => {
      const listRecipe = createListItem(recipe);
      listRecipe.className = 'recipe';
      listRecipe.setAttribute('info', recipe.ingredients.toString());
      FindFreeCell(this.listRecipes).appendChild(listRecipe);
    });
  }
}
export default View;
