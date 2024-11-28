import CheckSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CheckSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('check-square-filled')
export default class CheckSquareFilled extends AntdIcon {
  iconDefinition = CheckSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'check-square-filled': CheckSquareFilled
  }
}
