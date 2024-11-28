import CaretUpFilledSvg from '@ant-design/icons-svg/lib/asn/CaretUpFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('caret-up-filled')
export default class CaretUpFilled extends AntdIcon {
  iconDefinition = CaretUpFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'caret-up-filled': CaretUpFilled
  }
}
