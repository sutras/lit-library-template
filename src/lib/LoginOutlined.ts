import LoginOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoginOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('login-outlined')
export default class LoginOutlined extends AntdIcon {
  iconDefinition = LoginOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'login-outlined': LoginOutlined
  }
}
