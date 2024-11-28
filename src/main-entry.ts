import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('main-entry')
export class MainEntry extends LitElement {
  render() {
    return html`
      <h1>lit-library-template</h1>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'main-entry': MainEntry
  }
}
