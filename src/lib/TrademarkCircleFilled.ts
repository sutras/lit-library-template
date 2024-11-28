import TrademarkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('trademark-circle-filled')
export default class TrademarkCircleFilled extends AntdIcon {
  iconDefinition = TrademarkCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'trademark-circle-filled': TrademarkCircleFilled
  }
}
