import VideoCameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoCameraTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('video-camera-two-tone')
export default class VideoCameraTwoTone extends AntdIcon {
  iconDefinition = VideoCameraTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'video-camera-two-tone': VideoCameraTwoTone
  }
}
