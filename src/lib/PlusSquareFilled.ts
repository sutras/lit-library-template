import PlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlusSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('plus-square-filled')
export default class PlusSquareFilled extends AntdIcon {
  iconDefinition = PlusSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'plus-square-filled': PlusSquareFilled
  }
}
