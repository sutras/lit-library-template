import TruckFilledSvg from '@ant-design/icons-svg/lib/asn/TruckFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('truck-filled')
export default class TruckFilled extends AntdIcon {
  iconDefinition = TruckFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'truck-filled': TruckFilled
  }
}
