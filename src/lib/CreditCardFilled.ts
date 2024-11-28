import CreditCardFilledSvg from '@ant-design/icons-svg/lib/asn/CreditCardFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('credit-card-filled')
export default class CreditCardFilled extends AntdIcon {
  iconDefinition = CreditCardFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'credit-card-filled': CreditCardFilled
  }
}
