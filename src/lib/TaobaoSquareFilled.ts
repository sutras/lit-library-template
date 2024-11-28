import TaobaoSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('taobao-square-filled')
export default class TaobaoSquareFilled extends AntdIcon {
  iconDefinition = TaobaoSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'taobao-square-filled': TaobaoSquareFilled
  }
}
