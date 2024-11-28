import ControlFilledSvg from '@ant-design/icons-svg/lib/asn/ControlFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('control-filled')
export default class ControlFilled extends AntdIcon {
  iconDefinition = ControlFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'control-filled': ControlFilled
  }
}
