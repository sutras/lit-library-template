import UserOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('user-outlined')
export default class UserOutlined extends AntdIcon {
  iconDefinition = UserOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'user-outlined': UserOutlined
  }
}
