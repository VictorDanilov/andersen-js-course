class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    view.on('check', this.checkItems.bind(this));
    view.on('addToInventory', this.addToInventory.bind(this));
    view.on('resetCraftedItem', this.resetCraftedItem.bind(this));
  }

  checkItems(val) {
    const newItem = this.model.recipes.find(
      el =>
        JSON.stringify(el.ingridientsId) === JSON.stringify(val) ||
        JSON.stringify(el.ingridientsId) === JSON.stringify(val.reverse())
    );
    if (newItem) {
      this.view.craftedItem.innerHTML = `<img id="craftedItem" style="width: 200px; height:160px" src="${
        newItem.urlImg
      }"><span style="color:white">${newItem.name}<span>`;
    } else {
      alert('this craft does not exist, try to make a recipe of it');
    }
  }

  addToInventory(item) {
    this.model.addItemToInventory(item.src);

    this.view.inventory.innerHTML = '';
    this.model
      .getInventory()
      .forEach(
        el =>
          (this.view.inventory.innerHTML += `<img style="width: 200px; height:160px" src=${el} />`)
      );
  }

  resetCraftedItem(item) {
    if (item) {
      this.view.craftedItem.innerHTML = '';
    } else {
      alert('crafted item not found');
    }
  }
}

export default Controller;
