import ShopFilledSvg from '@ant-design/icons-svg/lib/asn/ShopFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('shop-filled')
export default class ShopFilled extends AntdIcon {
  iconDefinition = ShopFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'shop-filled': ShopFilled
  }
}
