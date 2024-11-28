import AimOutlinedSvg from '@ant-design/icons-svg/lib/asn/AimOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('aim-outlined')
export default class AimOutlined extends AntdIcon {
  iconDefinition = AimOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'aim-outlined': AimOutlined
  }
}
