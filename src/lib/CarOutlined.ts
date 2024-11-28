import CarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('car-outlined')
export default class CarOutlined extends AntdIcon {
  iconDefinition = CarOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'car-outlined': CarOutlined
  }
}
