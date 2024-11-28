import OrderedListOutlinedSvg from '@ant-design/icons-svg/lib/asn/OrderedListOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ordered-list-outlined')
export default class OrderedListOutlined extends AntdIcon {
  iconDefinition = OrderedListOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ordered-list-outlined': OrderedListOutlined
  }
}
