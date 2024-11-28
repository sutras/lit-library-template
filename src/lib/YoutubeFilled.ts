import YoutubeFilledSvg from '@ant-design/icons-svg/lib/asn/YoutubeFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('youtube-filled')
export default class YoutubeFilled extends AntdIcon {
  iconDefinition = YoutubeFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'youtube-filled': YoutubeFilled
  }
}
