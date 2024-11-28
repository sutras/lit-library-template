import CaretLeftFilledSvg from '@ant-design/icons-svg/lib/asn/CaretLeftFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('caret-left-filled')
export default class CaretLeftFilled extends AntdIcon {
  iconDefinition = CaretLeftFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'caret-left-filled': CaretLeftFilled
  }
}
