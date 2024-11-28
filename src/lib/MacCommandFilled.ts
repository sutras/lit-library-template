import MacCommandFilledSvg from '@ant-design/icons-svg/lib/asn/MacCommandFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('mac-command-filled')
export default class MacCommandFilled extends AntdIcon {
  iconDefinition = MacCommandFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'mac-command-filled': MacCommandFilled
  }
}
