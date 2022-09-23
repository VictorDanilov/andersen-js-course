import { EventEmitter } from './helps';

class View extends EventEmitter {
  constructor() {
    super();
    this.itemSlots = document.getElementById('itemsList');

    this.slot1 = document.getElementById('slot1');
    this.slot2 = document.getElementById('slot2');
    this.slot1.ondragover = this.allowDrop;
    this.slot2.ondragover = this.allowDrop;
    this.trashCan = this.allowDrop;
    this.slot1.ondrop = this.drop;
    this.slot2.ondrop = this.drop;
    this.trashCan.ondrop = this.discardTrash;

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
    this.discardButton.addEventListener('click', this.handleReset.bind(this));

    this.button.addEventListener('click', this.handleClick.bind(this));

    this.craftedItem = document.getElementById('crafted');
    this.trashCan = document.getElementById('trashCan');
    this.modal = document.getElementById('modal');

    this.modalOpen = document.getElementById('recBtn');
    this.modalOpen.addEventListener('click', this.handleOpen.bind(this));

    this.modalClose = document.getElementById('close');

    this.modalClose.addEventListener('click', this.handleClose.bind(this));

    this.createRecepieBtn = document.getElementById('createNewRec');
    this.createRecepieBtn.addEventListener('click', this.handleCreateNewRecepie.bind(this));

    this.formInputName = document.getElementById('name');
    this.formInputId = document.getElementById('id');
    this.formInputUrl = document.getElementById('url');
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

  discardTrash(ev) {
    console.log('jija');
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

  handleReset(event) {
    event.preventDefault();
    const item = this.craftedItem.innerHTML;
    this.emit('resetCraftedItem', item);
  }

  handleOpen(event) {
    try {
      const idItem1 = this.slot1.getElementsByClassName('items-list__item')[0].getAttribute('id');
      const idItem2 = this.slot2.getElementsByClassName('items-list__item')[0].getAttribute('id');
      if ((idItem1, idItem2)) {
        event.preventDefault();
        this.modal.style.display = 'block';
      }
    } catch (error) {
      alert('Plese add items');
    }
  }

  handleClose(event) {
    event.preventDefault();
    this.modal.style.display = 'none';
  }

  handleCreateNewRecepie(event) {
    event.preventDefault();
    const idItem1 = this.slot1.getElementsByClassName('items-list__item')[0].getAttribute('id');
    const idItem2 = this.slot2.getElementsByClassName('items-list__item')[0].getAttribute('id');
    const formName = this.formInputName.value;
    const formId = this.formInputId.value;
    const formUrl = this.formInputUrl.value;
    this.emit('createRecepie', [idItem1, idItem2, formName, formId, formUrl]);
  }
}

export default View;
