import BankTwoToneSvg from '@ant-design/icons-svg/lib/asn/BankTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bank-two-tone')
export default class BankTwoTone extends AntdIcon {
  iconDefinition = BankTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bank-two-tone': BankTwoTone
  }
}
