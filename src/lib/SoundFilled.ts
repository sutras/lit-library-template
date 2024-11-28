import SoundFilledSvg from '@ant-design/icons-svg/lib/asn/SoundFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sound-filled')
export default class SoundFilled extends AntdIcon {
  iconDefinition = SoundFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sound-filled': SoundFilled
  }
}
