import TrademarkCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('trademark-circle-outlined')
export default class TrademarkCircleOutlined extends AntdIcon {
  iconDefinition = TrademarkCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'trademark-circle-outlined': TrademarkCircleOutlined
  }
}
