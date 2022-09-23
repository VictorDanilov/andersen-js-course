class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    view.on('check', this.checkItems.bind(this));
  }

  checkItems(val) {
    const newItem = this.model.recipes.find(
      el =>
        JSON.stringify(el.ingridientsId) === JSON.stringify(val) ||
        JSON.stringify(el.ingridientsId) === JSON.stringify(val.reverse())
    );
    console.log(newItem);
    if (newItem) {
      this.view.craftedItem.innerHTML = `<img style="width: 200px; height:160px" src="${
        newItem.urlImg
      }"><span style="color:white">${newItem.name}<span>`;
    }
  }
}

export default Controller;
