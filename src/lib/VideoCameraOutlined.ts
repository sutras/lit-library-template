import VideoCameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('video-camera-outlined')
export default class VideoCameraOutlined extends AntdIcon {
  iconDefinition = VideoCameraOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'video-camera-outlined': VideoCameraOutlined
  }
}
