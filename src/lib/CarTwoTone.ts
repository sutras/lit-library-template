import CarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('car-two-tone')
export default class CarTwoTone extends AntdIcon {
  iconDefinition = CarTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'car-two-tone': CarTwoTone
  }
}
