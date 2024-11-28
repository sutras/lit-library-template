import NotificationFilledSvg from '@ant-design/icons-svg/lib/asn/NotificationFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('notification-filled')
export default class NotificationFilled extends AntdIcon {
  iconDefinition = NotificationFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'notification-filled': NotificationFilled
  }
}
