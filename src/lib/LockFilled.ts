import LockFilledSvg from '@ant-design/icons-svg/lib/asn/LockFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('lock-filled')
export default class LockFilled extends AntdIcon {
  iconDefinition = LockFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'lock-filled': LockFilled
  }
}
