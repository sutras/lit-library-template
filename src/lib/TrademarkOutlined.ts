import TrademarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('trademark-outlined')
export default class TrademarkOutlined extends AntdIcon {
  iconDefinition = TrademarkOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'trademark-outlined': TrademarkOutlined
  }
}
