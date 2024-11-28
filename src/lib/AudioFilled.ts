import AudioFilledSvg from '@ant-design/icons-svg/lib/asn/AudioFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('audio-filled')
export default class AudioFilled extends AntdIcon {
  iconDefinition = AudioFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'audio-filled': AudioFilled
  }
}
