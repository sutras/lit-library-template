import YoutubeOutlinedSvg from '@ant-design/icons-svg/lib/asn/YoutubeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('youtube-outlined')
export default class YoutubeOutlined extends AntdIcon {
  iconDefinition = YoutubeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'youtube-outlined': YoutubeOutlined
  }
}
