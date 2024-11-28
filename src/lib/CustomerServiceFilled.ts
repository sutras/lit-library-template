import CustomerServiceFilledSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('customer-service-filled')
export default class CustomerServiceFilled extends AntdIcon {
  iconDefinition = CustomerServiceFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'customer-service-filled': CustomerServiceFilled
  }
}
