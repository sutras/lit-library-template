import MailTwoToneSvg from '@ant-design/icons-svg/lib/asn/MailTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('mail-two-tone')
export default class MailTwoTone extends AntdIcon {
  iconDefinition = MailTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'mail-two-tone': MailTwoTone
  }
}
