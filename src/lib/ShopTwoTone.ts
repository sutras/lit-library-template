import ShopTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShopTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('shop-two-tone')
export default class ShopTwoTone extends AntdIcon {
  iconDefinition = ShopTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'shop-two-tone': ShopTwoTone
  }
}
