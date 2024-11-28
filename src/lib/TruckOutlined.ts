import TruckOutlinedSvg from '@ant-design/icons-svg/lib/asn/TruckOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('truck-outlined')
export default class TruckOutlined extends AntdIcon {
  iconDefinition = TruckOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'truck-outlined': TruckOutlined
  }
}
