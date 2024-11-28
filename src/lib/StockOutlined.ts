import StockOutlinedSvg from '@ant-design/icons-svg/lib/asn/StockOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('stock-outlined')
export default class StockOutlined extends AntdIcon {
  iconDefinition = StockOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'stock-outlined': StockOutlined
  }
}
