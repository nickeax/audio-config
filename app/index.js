const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');

const drag1 = document.querySelector('#drag1');
const drag2 = document.querySelector('#drag2');
const drag3 = document.querySelector('#drag3');
const drag4 = document.querySelector('#drag4');
const drag5 = document.querySelector('#drag5');
const drag6 = document.querySelector('#drag6');

const dropzone = document.querySelector('#dropzone');

document.addEventListener('drop', (e) => drop(e));

drag1.addEventListener('dragstart', (e) => drag(e));
drag2.addEventListener('dragstart', (e) => drag(e));
drag3.addEventListener('dragstart', (e) => drag(e));
drag4.addEventListener('dragstart', (e) => drag(e));
drag5.addEventListener('dragstart', (e) => drag(e));
drag6.addEventListener('dragstart', (e) => drag(e));

const dropZoneItems = [];

for (let i = 0; i < 25; i++) {
  dropZoneItems.push(generateDropZoneItem());
}

dropZoneItems.forEach((item) => {
  dropzone.append(item);
});

function allowDrop(e) {
  e.preventDefault();
  e.target.classList.add('dragover');
}

function dragLeave(e) {
  e.target.classList.remove('dragover');
}

function drag(e) {
  e.dataTransfer.setData('text', e.target.id);
}

function drop(e) {
  e.preventDefault();
  // console.log(e.target.id);
  console.log(e.dataTransfer);
  if (dropZoneItems.indexOf(e.target.id) > 0) {
    const data = e.dataTransfer.getData('text');
    e.target.appendChild(document.getElementById(data));
  }

  const data = e.dataTransfer.getData('text');
  console.log(data);
  e.target.appendChild(document.getElementById(data));
}

function generateDropZoneItem() {
  const dropZoneItem = document.createElement('div');
  dropZoneItem.classList.add('dropzone-item');
  dropZoneItem.setAttribute('draggable', 'true');
  dropZoneItem.setAttribute('id', generateId());
  dropZoneItem.addEventListener('dragstart', (e) => drag(e));
  dropZoneItem.addEventListener('dragleave', (e) => dragLeave(e));
  dropZoneItem.addEventListener('dragover', (e) => allowDrop(e));
  dropzone.appendChild(dropZoneItem);
}

function generateId() {
  let alphas = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let numbers = '0123456789';
  let id = '';

  for (let i = 0; i < 24; i++) {
    id += alphas[Math.floor(Math.random() * alphas.length)];
  }

  return id;
}