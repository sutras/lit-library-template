import LockOutlinedSvg from '@ant-design/icons-svg/lib/asn/LockOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('lock-outlined')
export default class LockOutlined extends AntdIcon {
  iconDefinition = LockOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'lock-outlined': LockOutlined
  }
}
