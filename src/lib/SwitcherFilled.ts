import SwitcherFilledSvg from '@ant-design/icons-svg/lib/asn/SwitcherFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('switcher-filled')
export default class SwitcherFilled extends AntdIcon {
  iconDefinition = SwitcherFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'switcher-filled': SwitcherFilled
  }
}
