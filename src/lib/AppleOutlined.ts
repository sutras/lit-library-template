import AppleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('apple-outlined')
export default class AppleOutlined extends AntdIcon {
  iconDefinition = AppleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'apple-outlined': AppleOutlined
  }
}
