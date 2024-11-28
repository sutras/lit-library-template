import UnlockFilledSvg from '@ant-design/icons-svg/lib/asn/UnlockFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('unlock-filled')
export default class UnlockFilled extends AntdIcon {
  iconDefinition = UnlockFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'unlock-filled': UnlockFilled
  }
}
