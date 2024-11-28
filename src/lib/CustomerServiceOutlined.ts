import CustomerServiceOutlinedSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('customer-service-outlined')
export default class CustomerServiceOutlined extends AntdIcon {
  iconDefinition = CustomerServiceOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'customer-service-outlined': CustomerServiceOutlined
  }
}
