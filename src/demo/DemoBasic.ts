import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import '@antd-wc/icons/HomeOutlined'
import '@antd-wc/icons/SettingFilled'
import '@antd-wc/icons/SmileOutlined'
import '@antd-wc/icons/SyncOutlined'
import '@antd-wc/icons/SmileOutlined'
import '@antd-wc/icons/LoadingOutlined'

@customElement('demo-basic')
export class DemoBasic extends LitElement {
  render() {
    return html`
      <div>
        <home-outlined></home-outlined>
        <setting-filled></setting-filled>
        <smile-outlined></smile-outlined>
        <sync-outlined spin></sync-outlined>
        <smile-outlined rotate="180"></smile-outlined>
        <loading-outlined></loading-outlined>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'demo-basic': DemoBasic
  }
}
