import items from './items';

class Model {
  constructor(state = items) {
    this.state = state;
  }

  getItem(id) {
    return this.state.find(item => item.id === id);
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
