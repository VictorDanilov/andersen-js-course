import EventEmitter from './helpers';

class DrawingBagView extends EventEmitter {
  constructor() {
    super();
    this.form = document.getElementById('drawing-Bag');
    this.input = document.getElementById('add-drawing');
    this.list = document.getElementById('drawing-list');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
  }

  createDrawingItem(drawing) {
    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    const label = document.createElement('label');
    label.className = 'title';
    label.textContent = drawing.title;
    const item = document.createElement('li');
    item.className = 'drawing-Item';
    item.setAttribute('data-id', drawing.id);
    item.appendChild(removeButton);
    item.appendChild(label);
    return this.addEventListeners(item);
  }

  addEventListeners(item) {
    const removeButton = item.querySelector('button.remove');

    removeButton.addEventListener('click', this.handleRemove.bind(this));
    return item;
  }

  handleAdd(event) {
    event.preventDefault();

    if (!this.input.value) return alert('Необходимо ввести название чертежа.');

    this.emit('add', this.input.value);

    return null;
  }

  handleRemove({ target }) {
    const listItem = target.parentNode;

    this.emit('remove', listItem.getAttribute('data-id'));
  }

  findlistItem(id) {
    return this.list.querySelector(`[data-id="${id}"]`);
  }

  addItem(drawing) {
    const listItem = this.createDrawingItem(drawing);
    this.input.value = '';
    this.list.appendChild(listItem);
  }

  removeItem(id) {
    const listItem = this.findlistItem(id);
    this.list.removeChild(listItem);
  }
}

class ToolBagView extends EventEmitter {
  constructor() {
    super();
    this.form = document.getElementById('tools-Box');
    this.input = document.getElementById('add-tools');
    this.list = document.getElementById('tools-list');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
  }

  createToolItem(tools) {
    const removeToolButton = document.createElement('button');
    removeToolButton.className = 'removeTool';
    const label = document.createElement('label');
    label.className = 'title';
    label.textContent = tools.title;
    const item = document.createElement('li');
    item.className = 'tools-Item';
    item.setAttribute('data-id', tools.id);
    item.appendChild(removeToolButton);
    item.appendChild(label);
    return this.addEventListeners(item);
  }

  addEventListeners(item) {
    const removeToolButton = item.querySelector('button.removeTool');

    removeToolButton.addEventListener('click', this.handleRemove.bind(this));
    return item;
  }

  handleAdd(event) {
    event.preventDefault();

    if (!this.input.value) return alert('Необходимо ввести название запчасти.');
    this.emit('add', this.input.value);

    return null;
  }

  handleRemove({ target }) {
    const listItem = target.parentNode;

    this.emit('removeTool', listItem.getAttribute('data-id'));
  }

  findlistItem(id) {
    return this.list.querySelector(`[data-id="${id}"]`);
  }

  addItem(tools) {
    const listItem = this.createToolItem(tools);
    this.input.value = '';
    this.list.appendChild(listItem);
  }

  removeItem(id) {
    const listItem = this.findlistItem(id);
    this.list.removeChild(listItem);
  }
}

export { DrawingBagView, ToolBagView };
