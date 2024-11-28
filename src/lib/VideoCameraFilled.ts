import VideoCameraFilledSvg from '@ant-design/icons-svg/lib/asn/VideoCameraFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('video-camera-filled')
export default class VideoCameraFilled extends AntdIcon {
  iconDefinition = VideoCameraFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'video-camera-filled': VideoCameraFilled
  }
}
