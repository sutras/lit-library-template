import AudioMutedOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioMutedOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('audio-muted-outlined')
export default class AudioMutedOutlined extends AntdIcon {
  iconDefinition = AudioMutedOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'audio-muted-outlined': AudioMutedOutlined
  }
}
