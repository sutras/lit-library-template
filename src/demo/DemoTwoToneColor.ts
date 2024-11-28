import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import '@antd-wc/icons/SmileTwoTone'
import '@antd-wc/icons/HeartTwoTone'
import '@antd-wc/icons/CheckCircleTwoTone'

@customElement('demo-two-tone-color')
export class DemoTwoToneColor extends LitElement {
  render() {
    return html`
      <div>
        <smile-two-tone></smile-two-tone>
        <heart-two-tone primary="#eb2f96"></heart-two-tone>
        <check-circle-two-tone primary="#52c41a"></check-circle-two-tone>
        <html5-two-tone primary="#52c41a" secondary="#eb2f96"></html5-two-tone>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-two-tone-color': DemoTwoToneColor
  }
}
