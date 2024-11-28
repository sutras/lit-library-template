import UserAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserAddOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('user-add-outlined')
export default class UserAddOutlined extends AntdIcon {
  iconDefinition = UserAddOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'user-add-outlined': UserAddOutlined
  }
}
