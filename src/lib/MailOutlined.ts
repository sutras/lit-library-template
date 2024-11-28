import MailOutlinedSvg from '@ant-design/icons-svg/lib/asn/MailOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('mail-outlined')
export default class MailOutlined extends AntdIcon {
  iconDefinition = MailOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'mail-outlined': MailOutlined
  }
}
