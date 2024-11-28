import CreditCardOutlinedSvg from '@ant-design/icons-svg/lib/asn/CreditCardOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('credit-card-outlined')
export default class CreditCardOutlined extends AntdIcon {
  iconDefinition = CreditCardOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'credit-card-outlined': CreditCardOutlined
  }
}
