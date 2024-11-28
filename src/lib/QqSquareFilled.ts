import QqSquareFilledSvg from '@ant-design/icons-svg/lib/asn/QqSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('qq-square-filled')
export default class QqSquareFilled extends AntdIcon {
  iconDefinition = QqSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'qq-square-filled': QqSquareFilled
  }
}
