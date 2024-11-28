import LogoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LogoutOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('logout-outlined')
export default class LogoutOutlined extends AntdIcon {
  iconDefinition = LogoutOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'logout-outlined': LogoutOutlined
  }
}
