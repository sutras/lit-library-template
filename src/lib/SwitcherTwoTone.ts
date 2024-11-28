import SwitcherTwoToneSvg from '@ant-design/icons-svg/lib/asn/SwitcherTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('switcher-two-tone')
export default class SwitcherTwoTone extends AntdIcon {
  iconDefinition = SwitcherTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'switcher-two-tone': SwitcherTwoTone
  }
}
