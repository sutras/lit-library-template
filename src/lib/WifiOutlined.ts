import WifiOutlinedSvg from '@ant-design/icons-svg/lib/asn/WifiOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('wifi-outlined')
export default class WifiOutlined extends AntdIcon {
  iconDefinition = WifiOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'wifi-outlined': WifiOutlined
  }
}
