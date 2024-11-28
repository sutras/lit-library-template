import MinusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MinusSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('minus-square-filled')
export default class MinusSquareFilled extends AntdIcon {
  iconDefinition = MinusSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'minus-square-filled': MinusSquareFilled
  }
}
