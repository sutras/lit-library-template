import CaretRightFilledSvg from '@ant-design/icons-svg/lib/asn/CaretRightFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('caret-right-filled')
export default class CaretRightFilled extends AntdIcon {
  iconDefinition = CaretRightFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'caret-right-filled': CaretRightFilled
  }
}
