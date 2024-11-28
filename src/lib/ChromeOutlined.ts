import ChromeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ChromeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('chrome-outlined')
export default class ChromeOutlined extends AntdIcon {
  iconDefinition = ChromeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'chrome-outlined': ChromeOutlined
  }
}
