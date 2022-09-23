class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    view.on('check', this.checkItems.bind(this));
    view.on('addToInventory', this.addToInventory.bind(this));
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
    console.log(item.src);
    this.model.addItemToInventory(item.src);
    console.log(this.model.getInventory());
    this.view.inventory.innerHTML = '';
    this.model
      .getInventory()
      .forEach(
        el =>
          (this.view.inventory.innerHTML += `<img style="width: 200px; height:160px" src=${el} />`)
      );
  }
}

export default Controller;
