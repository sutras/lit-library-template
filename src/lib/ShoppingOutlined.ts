import ShoppingOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('shopping-outlined')
export default class ShoppingOutlined extends AntdIcon {
  iconDefinition = ShoppingOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'shopping-outlined': ShoppingOutlined
  }
}
