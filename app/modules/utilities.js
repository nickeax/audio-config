export class Utilities {
  generateId(length = 16) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }

  buildElement(tag, id, classes, text) {
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

  createFormElementWithLabel(type, id, classes, label, placeholder = '', validateInputDependencies = [], val = '', buttonLabel = '') {
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

    inputElement.id = id;

    switch (type) {
      case 'input':
        inputElement.type = type;
        inputElement.placeholder = placeholder;
        inputElement.value = val;
        break;
      case 'button':
        labelElement.innerText = '';
        inputElement.innerText = buttonLabel;
        if (validateInputDependencies.length > 0)
          inputElement.dataset.validateInputDependencies = validateInputDependencies.join('||');
        break;
      case 'textarea':
        inputElement.rows = 4;
        inputElement.cols = 50;
        inputElement.placeholder = placeholder;
        inputElement.value = val;
        break;
      default:
        throw new Error('Invalid form element type');
    }
    formElement.appendChild(inputElement);

    return formElement;
  }

  removeChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}