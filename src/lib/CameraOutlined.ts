import CameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/CameraOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('camera-outlined')
export default class CameraOutlined extends AntdIcon {
  iconDefinition = CameraOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'camera-outlined': CameraOutlined
  }
}
