import AudioTwoToneSvg from '@ant-design/icons-svg/lib/asn/AudioTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('audio-two-tone')
export default class AudioTwoTone extends AntdIcon {
  iconDefinition = AudioTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'audio-two-tone': AudioTwoTone
  }
}
