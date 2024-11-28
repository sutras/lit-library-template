import CarFilledSvg from '@ant-design/icons-svg/lib/asn/CarFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('car-filled')
export default class CarFilled extends AntdIcon {
  iconDefinition = CarFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'car-filled': CarFilled
  }
}
