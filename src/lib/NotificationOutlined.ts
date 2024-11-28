import NotificationOutlinedSvg from '@ant-design/icons-svg/lib/asn/NotificationOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('notification-outlined')
export default class NotificationOutlined extends AntdIcon {
  iconDefinition = NotificationOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'notification-outlined': NotificationOutlined
  }
}
