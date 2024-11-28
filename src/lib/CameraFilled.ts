import CameraFilledSvg from '@ant-design/icons-svg/lib/asn/CameraFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('camera-filled')
export default class CameraFilled extends AntdIcon {
  iconDefinition = CameraFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'camera-filled': CameraFilled
  }
}
