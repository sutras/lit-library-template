import CreditCardTwoToneSvg from '@ant-design/icons-svg/lib/asn/CreditCardTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('credit-card-two-tone')
export default class CreditCardTwoTone extends AntdIcon {
  iconDefinition = CreditCardTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'credit-card-two-tone': CreditCardTwoTone
  }
}
