import TrademarkCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('trademark-circle-two-tone')
export default class TrademarkCircleTwoTone extends AntdIcon {
  iconDefinition = TrademarkCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'trademark-circle-two-tone': TrademarkCircleTwoTone
  }
}
