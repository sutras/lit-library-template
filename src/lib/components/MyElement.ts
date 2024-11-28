import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('my-element')
export default class MyElement extends LitElement {
  render() {
    return html`
      <div><slot>My Element</slot></div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
