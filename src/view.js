import { EventEmitter } from './helps';

class View extends EventEmitter {
  constructor() {
    super();
    this.itemSlots = document.getElementById('itemsList');

    // this.slot1 = document.getElementById('slot1');
    // this.slot2 = document.getElementById('slot2');
    // this.slot1.ondragover = this.allowDrop;
    // this.slot2.ondragover = this.allowDrop;
    // this.slot1.ondrop = this.drop;
    // this.slot2.ondrop = this.drop;

    // this.itemsArr = [...document.getElementsByClassName('items-list__item')];
    // this.itemsArr.map(item => {
    //   item.ondragstart = this.drag;
    //   item.ondrop = this.drop;
    // });

    // this.itemSlots.ondragover = this.allowDrop;
    // this.button = document.getElementById('craftBtn');
    // this.button.addEventListener('click', this.handleClick.bind(this));

    // this.craftetItem = document.getElementById('crafted');
  }

  // allowDrop(ev) {
  //   console.log(
  //     `dragOver: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${
  //       ev.dataTransfer.effectAllowed
  //     }`
  //   );
  //   ev.preventDefault();
  //   // Set the dropEffect to move
  //   ev.dataTransfer.effectAllowed = 'copy';
  //   ev.dataTransfer.dropEffect = 'copy';
  //   console.log(
  //     `dragOver: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${
  //       ev.dataTransfer.effectAllowed
  //     }`
  //   );
  // }

  // drag(ev) {
  //   console.log(
  //     `dragStart: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${
  //       ev.dataTransfer.effectAllowed
  //     }`
  //   );

  //   ev.dataTransfer.setData('text', ev.target.id);
  //   ev.dataTransfer.effectAllowed = 'copy';
  //   ev.dataTransfer.dropEffect = 'copy';
  // }

  // drop(ev) {
  //   console.log(
  //     `drop: dropEffect = ${ev.dataTransfer.dropEffect} ; effectAllowed = ${
  //       ev.dataTransfer.effectAllowed
  //     }`
  //   );
  //   ev.preventDefault();

  //   // Get the id of the target and add the moved element to the target's DOM
  //   const data = ev.dataTransfer.getData('text');
  //   ev.target.appendChild(document.getElementById(data));
  // }

  // handleClick(event) {
  //   event.preventDefault();
  //   const idItem1 = this.slot1.getElementsByClassName('items-list__item')[0].getAttribute('id');
  //   const idItem2 = this.slot2.getElementsByClassName('items-list__item')[0].getAttribute('id');
  //   console.log(idItem1, idItem2);
  //   this.emit('check', [idItem1, idItem2]);
  //   this.slot1.innerHTML = '';
  //   this.slot2.innerHTML = '';
  // }
}

export default View;
