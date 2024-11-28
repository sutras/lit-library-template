import AccountBookFilledSvg from '@ant-design/icons-svg/lib/asn/AccountBookFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('account-book-filled')
export default class AccountBookFilled extends AntdIcon {
  iconDefinition = AccountBookFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'account-book-filled': AccountBookFilled
  }
}
