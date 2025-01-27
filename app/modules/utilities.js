export class Utilities {
  static generateId() {
    return Math.random().toString(36).substring(2, 9);
  }

  static buildElement(tag, id, classes, text) {
    let element = document.createElement(tag);
    if (id) {
      element.id = id;
    }
    if (classes) {
      classes.forEach(c => {
        element.classList.add(c);
      });
    }
    if (text) {
      element.innerText = text;
    }
    return element;
  }

  static createFormElementWithLabel(type, id, label) {
    let formElement = document.createElement('div');
    formElement.classList.add('formElement');

    let labelElement = document.createElement('label');
    labelElement.classList.add('darkerTintColour');
    labelElement.id = id + 'Label';
    labelElement.for = id;
    labelElement.innerText = label;
    formElement.appendChild(labelElement);

    let inputElement = document.createElement(type);
    inputElement.classList.add('darkerTintColour');
    inputElement.classList.add('textMainLight');
    inputElement.type = type;
    inputElement.id = id;
    formElement.appendChild(inputElement);

    return formElement;
  }
}