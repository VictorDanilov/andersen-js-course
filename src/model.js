import { items, recipes, inventory } from './items';

class Model {
  constructor() {
    this.items = items;
    this.recipes = recipes;
    this.inventoryItems = inventory;
  }

  addItemToInventory(item) {
    return this.inventoryItems.push(item);
  }

  getInventory() {
    return this.inventoryItems;
  }

  getItem(id) {
    return this.items.find(item => item.id === id);
  }

  addItem(item) {
    return this.state.push(item);
  }

  removeItem(id) {
    const index = this.state.findIndex(item => item.id === id);

    if (index > -1) {
      this.state.splice(index, 1);
    }
  }
}
export default Model;
