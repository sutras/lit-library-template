import AudioOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('audio-outlined')
export default class AudioOutlined extends AntdIcon {
  iconDefinition = AudioOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'audio-outlined': AudioOutlined
  }
}
