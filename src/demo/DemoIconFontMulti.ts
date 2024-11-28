import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import '@antd-wc/icons/HomeOutlined'
import { createFromIconfontCN } from '@antd-wc/icons'

@customElement('icon-font-multi')
class IconFontMulti extends createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overridden)
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
  ],
}) {}

declare global {
  interface HTMLElementTagNameMap {
    'icon-font-multi': IconFontMulti
  }
}

@customElement('demo-icon-font-multi')
export class DemoIconFontMulti extends LitElement {
  render() {
    return html`
      <div>
        <icon-font type="icon-javascript"></icon-font>
        <icon-font type="icon-java"></icon-font>
        <icon-font type="icon-shoppingcart"></icon-font>
        <icon-font type="icon-python"></icon-font>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-icon-font-multi': DemoIconFontMulti
  }
}
