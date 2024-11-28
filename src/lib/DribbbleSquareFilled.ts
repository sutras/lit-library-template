import DribbbleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dribbble-square-filled')
export default class DribbbleSquareFilled extends AntdIcon {
  iconDefinition = DribbbleSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dribbble-square-filled': DribbbleSquareFilled
  }
}
