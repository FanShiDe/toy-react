import { createElement, Component, render } from '../index'

class MyComponent extends Component {
  render() {
    return (
      <div>
        <h1>My Component</h1>
        {this.children}
      </div>
    )
  }
}

render(
  (
    <MyComponent>
      <div>1111</div>
      <div>2222</div>
    </MyComponent>
  ),
  document.body
)
