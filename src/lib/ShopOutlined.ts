import ShopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShopOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('shop-outlined')
export default class ShopOutlined extends AntdIcon {
  iconDefinition = ShopOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'shop-outlined': ShopOutlined
  }
}
