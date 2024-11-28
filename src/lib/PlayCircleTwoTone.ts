import PlayCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlayCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('play-circle-two-tone')
export default class PlayCircleTwoTone extends AntdIcon {
  iconDefinition = PlayCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'play-circle-two-tone': PlayCircleTwoTone
  }
}
