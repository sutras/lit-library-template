import KeyOutlinedSvg from '@ant-design/icons-svg/lib/asn/KeyOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('key-outlined')
export default class KeyOutlined extends AntdIcon {
  iconDefinition = KeyOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'key-outlined': KeyOutlined
  }
}
