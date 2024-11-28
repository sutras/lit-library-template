import ShoppingTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShoppingTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('shopping-two-tone')
export default class ShoppingTwoTone extends AntdIcon {
  iconDefinition = ShoppingTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'shopping-two-tone': ShoppingTwoTone
  }
}
