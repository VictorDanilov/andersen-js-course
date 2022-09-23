import { EventEmitter } from './helps';

class View extends EventEmitter {
  constructor() {
    super();
    this.itemSlots = document.getElementById('itemsList');

    this.slot1 = document.getElementById('slot1');
    this.slot2 = document.getElementById('slot2');
    this.slot1.ondragover = this.allowDrop;
    this.slot2.ondragover = this.allowDrop;
    this.slot1.ondrop = this.drop;
    this.slot2.ondrop = this.drop;

    this.itemsArr = [...document.getElementsByClassName('items-list__item')];
    this.itemsArr.map(item => {
      item.ondragstart = this.drag;
      item.ondrop = this.drop;
    });

    this.itemSlots.ondragover = this.allowDrop;
    this.button = document.getElementById('craftBtn');
    this.addToInvButton = document.getElementById('addToInventory');
    this.addToInvButton.addEventListener('click', this.handleAddToInventory.bind(this));
    this.inventory = document.getElementById('inventory');

    this.discardButton = document.getElementById('discardItem');

    this.button.addEventListener('click', this.handleClick.bind(this));

    this.craftedItem = document.getElementById('crafted');
  }

  allowDrop(ev) {
    return ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
    ev.dataTransfer.effectAllowed = 'copy';
  }

  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const original = document.getElementById(data);
    const copyimg = original.cloneNode(true);
    ev.target.appendChild(copyimg);
  }

  handleClick(event) {
    event.preventDefault();
    const idItem1 = this.slot1.getElementsByClassName('items-list__item')[0].getAttribute('id');
    const idItem2 = this.slot2.getElementsByClassName('items-list__item')[0].getAttribute('id');
    this.emit('check', [idItem1, idItem2]);
    this.slot1.innerHTML = '';
    this.slot2.innerHTML = '';
  }

  handleAddToInventory(event) {
    event.preventDefault();
    const createdItem = document.getElementById('craftedItem');
    this.emit('addToInventory', createdItem);
  }
}

export default View;
