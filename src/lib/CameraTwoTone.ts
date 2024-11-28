import CameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/CameraTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('camera-two-tone')
export default class CameraTwoTone extends AntdIcon {
  iconDefinition = CameraTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'camera-two-tone': CameraTwoTone
  }
}
