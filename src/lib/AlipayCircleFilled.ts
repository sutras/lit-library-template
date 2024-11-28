import AlipayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('alipay-circle-filled')
export default class AlipayCircleFilled extends AntdIcon {
  iconDefinition = AlipayCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'alipay-circle-filled': AlipayCircleFilled
  }
}
