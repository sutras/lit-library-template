import UserDeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserDeleteOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('user-delete-outlined')
export default class UserDeleteOutlined extends AntdIcon {
  iconDefinition = UserDeleteOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'user-delete-outlined': UserDeleteOutlined
  }
}
