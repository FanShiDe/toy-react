export default class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type)
  }

  setAttribute(propName, propValue) {
    this.root.setAttribute(propName, propValue)
  }

  appendChild(child) {
    this.root.appendChild(child.root)
  }
}
