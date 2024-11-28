import CustomerServiceTwoToneSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('customer-service-two-tone')
export default class CustomerServiceTwoTone extends AntdIcon {
  iconDefinition = CustomerServiceTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'customer-service-two-tone': CustomerServiceTwoTone
  }
}
