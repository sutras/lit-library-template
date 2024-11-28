import AlipaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/AlipaySquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('alipay-square-filled')
export default class AlipaySquareFilled extends AntdIcon {
  iconDefinition = AlipaySquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'alipay-square-filled': AlipaySquareFilled
  }
}
