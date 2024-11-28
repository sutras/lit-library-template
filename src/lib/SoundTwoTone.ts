import SoundTwoToneSvg from '@ant-design/icons-svg/lib/asn/SoundTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sound-two-tone')
export default class SoundTwoTone extends AntdIcon {
  iconDefinition = SoundTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sound-two-tone': SoundTwoTone
  }
}
