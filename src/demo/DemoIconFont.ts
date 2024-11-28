import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import '@antd-wc/icons/HomeOutlined'
import { createFromIconfontCN } from '@antd-wc/icons'

@customElement('icon-font')
class IconFont extends createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
}) {}

declare global {
  interface HTMLElementTagNameMap {
    'icon-font': IconFont
  }
}

@customElement('demo-icon-font')
export class DemoIconFont extends LitElement {
  render() {
    return html`
      <div>
        <icon-font type="icon-tuichu"></icon-font>
        <icon-font type="icon-facebook" style="color: #1877F2"></icon-font>
        <icon-font type="icon-twitter"></icon-font>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-icon-font': DemoIconFont
  }
}
