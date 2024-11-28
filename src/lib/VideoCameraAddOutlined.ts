import VideoCameraAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraAddOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('video-camera-add-outlined')
export default class VideoCameraAddOutlined extends AntdIcon {
  iconDefinition = VideoCameraAddOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'video-camera-add-outlined': VideoCameraAddOutlined
  }
}
