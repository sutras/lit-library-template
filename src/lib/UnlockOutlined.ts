import UnlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnlockOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('unlock-outlined')
export default class UnlockOutlined extends AntdIcon {
  iconDefinition = UnlockOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'unlock-outlined': UnlockOutlined
  }
}
