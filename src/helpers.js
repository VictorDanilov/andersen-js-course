export function allowDrop(ev) {
  ev.preventDefault();
}

export function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
}

export function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData('text');
  if (!ev.target.childNodes.length) ev.target.appendChild(document.getElementById(data));
}
export function addDrag(item) {
  item.setAttribute('draggable', 'true');
  item.addEventListener('dragstart', drag);
}
export function FindFreeCell(list) {
  return Array.from(list).find(cell => !cell.childNodes.length);
}
export function createListItem(item) {
  const newItem = document.createElement('p');
  newItem.id = item.id;
  newItem.textContent = item.name;
  addDrag(newItem);
  return newItem;
}
