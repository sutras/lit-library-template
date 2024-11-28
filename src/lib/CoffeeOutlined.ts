import CoffeeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CoffeeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('coffee-outlined')
export default class CoffeeOutlined extends AntdIcon {
  iconDefinition = CoffeeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'coffee-outlined': CoffeeOutlined
  }
}
