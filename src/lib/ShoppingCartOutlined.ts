import ShoppingCartOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('shopping-cart-outlined')
export default class ShoppingCartOutlined extends AntdIcon {
  iconDefinition = ShoppingCartOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'shopping-cart-outlined': ShoppingCartOutlined
  }
}
