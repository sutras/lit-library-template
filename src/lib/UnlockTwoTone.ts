import UnlockTwoToneSvg from '@ant-design/icons-svg/lib/asn/UnlockTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('unlock-two-tone')
export default class UnlockTwoTone extends AntdIcon {
  iconDefinition = UnlockTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'unlock-two-tone': UnlockTwoTone
  }
}
