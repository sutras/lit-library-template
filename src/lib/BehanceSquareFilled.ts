import BehanceSquareFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('behance-square-filled')
export default class BehanceSquareFilled extends AntdIcon {
  iconDefinition = BehanceSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'behance-square-filled': BehanceSquareFilled
  }
}
