import ShakeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShakeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('shake-outlined')
export default class ShakeOutlined extends AntdIcon {
  iconDefinition = ShakeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'shake-outlined': ShakeOutlined
  }
}
