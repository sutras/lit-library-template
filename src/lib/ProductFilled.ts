import ProductFilledSvg from '@ant-design/icons-svg/lib/asn/ProductFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('product-filled')
export default class ProductFilled extends AntdIcon {
  iconDefinition = ProductFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'product-filled': ProductFilled
  }
}
