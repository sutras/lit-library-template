import SignalFilledSvg from '@ant-design/icons-svg/lib/asn/SignalFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('signal-filled')
export default class SignalFilled extends AntdIcon {
  iconDefinition = SignalFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'signal-filled': SignalFilled
  }
}
