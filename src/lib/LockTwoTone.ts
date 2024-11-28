import LockTwoToneSvg from '@ant-design/icons-svg/lib/asn/LockTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('lock-two-tone')
export default class LockTwoTone extends AntdIcon {
  iconDefinition = LockTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'lock-two-tone': LockTwoTone
  }
}
