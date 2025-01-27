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

  static createFormElementWithLabel(type, id, classes, label, placeholder = '') {
    let formElement = document.createElement('div');
    formElement.classList.add('formElement');

    let labelElement = document.createElement('label');
    labelElement.id = id + 'Label';
    labelElement.for = id;
    labelElement.innerText = label;

    formElement.appendChild(labelElement);

    let inputElement = document.createElement(type);

    if (classes.length > 0) {
      classes.forEach(c => {
        inputElement.classList.add(c);
      });
    }


    switch (type) {
      case 'input':
        inputElement.type = type;
        inputElement.id = id;
        inputElement.placeholder = placeholder;
        break;
      case 'button':
        inputElement.innerText = label;
      case 'textarea':
        break;
      default:
        throw new Error('Invalid form element type');
    }
    formElement.appendChild(inputElement);

    return formElement;
  }
}