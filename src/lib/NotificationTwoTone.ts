import NotificationTwoToneSvg from '@ant-design/icons-svg/lib/asn/NotificationTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('notification-two-tone')
export default class NotificationTwoTone extends AntdIcon {
  iconDefinition = NotificationTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'notification-two-tone': NotificationTwoTone
  }
}
