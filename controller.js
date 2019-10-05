class DrawingController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.addDrawing.bind(this));
    view.on('remove', this.removeDrawing.bind(this));
  }

  addDrawing(title) {
    const drawing = this.model.addItem({
      id: Date.now(),
      title,
      //    здесь можно добавить компоненты в рецепт
    });

    this.view.addItem(drawing);
  }

  removeDrawing(id) {
    this.model.removeItem(id);
    this.view.removeItem(id);
  }
}

class ToolsController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on('add', this.addTool.bind(this));
    view.on('removeTool', this.removeTool.bind(this));
  }

  addTool(title) {
    const tool = this.model.addItem({
      id: Date.now(),
      title,
    });

    this.view.addItem(tool);
  }

  removeTool(id) {
    this.model.removeItem(id);
    this.view.removeItem(id);
  }
}

export { DrawingController, ToolsController };
