import AccountBookOutlinedSvg from '@ant-design/icons-svg/lib/asn/AccountBookOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('account-book-outlined')
export default class AccountBookOutlined extends AntdIcon {
  iconDefinition = AccountBookOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'account-book-outlined': AccountBookOutlined
  }
}
