import ControlTwoToneSvg from '@ant-design/icons-svg/lib/asn/ControlTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('control-two-tone')
export default class ControlTwoTone extends AntdIcon {
  iconDefinition = ControlTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'control-two-tone': ControlTwoTone
  }
}
