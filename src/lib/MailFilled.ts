import MailFilledSvg from '@ant-design/icons-svg/lib/asn/MailFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('mail-filled')
export default class MailFilled extends AntdIcon {
  iconDefinition = MailFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'mail-filled': MailFilled
  }
}
