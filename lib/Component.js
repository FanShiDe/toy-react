import ElementWrapper from './wrapper/ElementWrapper'
import TextWrapper from './wrapper/TextWrapper'

export class Component {
  constructor() {
    this._root = null
    this.props = Object.create(null)
    this.children = []
  }

  setAttribute(propName, propValue) {
    this.props[propName] = propValue
  }

  appendChild(child) {
    this.children.push(child)
  }

  get root() {
    if (!this._root) {
      this._root = this.render().root
    }

    return this._root
  }
}

export function render(component, parentComponent) {
  parentComponent.appendChild(component.root)
}

export function createElement(type, props, ...children) {
  let ele
  if (typeof type === 'string') {
    ele = new ElementWrapper(type)
  } else {
    ele = new type
  }

  for (const prop in props) {
    ele.setAttribute(prop, props[prop])
  }
  
  const insertChildren = (children) => {
    for (let child of children) {
      if (typeof child === 'string') {
        child = new TextWrapper(child)
      }
      if (child instanceof Array) {
        insertChildren(child)
      } else {
        ele.appendChild(child)
      }
    }
  }

  insertChildren(children)

  return ele
}
