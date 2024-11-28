import ProductOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProductOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('product-outlined')
export default class ProductOutlined extends AntdIcon {
  iconDefinition = ProductOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'product-outlined': ProductOutlined
  }
}
