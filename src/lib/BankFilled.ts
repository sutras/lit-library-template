import BankFilledSvg from '@ant-design/icons-svg/lib/asn/BankFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bank-filled')
export default class BankFilled extends AntdIcon {
  iconDefinition = BankFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bank-filled': BankFilled
  }
}
