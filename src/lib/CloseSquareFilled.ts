import CloseSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CloseSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('close-square-filled')
export default class CloseSquareFilled extends AntdIcon {
  iconDefinition = CloseSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'close-square-filled': CloseSquareFilled
  }
}
