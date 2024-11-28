import ShoppingFilledSvg from '@ant-design/icons-svg/lib/asn/ShoppingFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('shopping-filled')
export default class ShoppingFilled extends AntdIcon {
  iconDefinition = ShoppingFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'shopping-filled': ShoppingFilled
  }
}
