import AccountBookTwoToneSvg from '@ant-design/icons-svg/lib/asn/AccountBookTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('account-book-two-tone')
export default class AccountBookTwoTone extends AntdIcon {
  iconDefinition = AccountBookTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'account-book-two-tone': AccountBookTwoTone
  }
}
