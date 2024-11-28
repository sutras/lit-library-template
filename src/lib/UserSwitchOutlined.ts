import UserSwitchOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserSwitchOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('user-switch-outlined')
export default class UserSwitchOutlined extends AntdIcon {
  iconDefinition = UserSwitchOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'user-switch-outlined': UserSwitchOutlined
  }
}
