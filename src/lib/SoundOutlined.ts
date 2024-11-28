import SoundOutlinedSvg from '@ant-design/icons-svg/lib/asn/SoundOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sound-outlined')
export default class SoundOutlined extends AntdIcon {
  iconDefinition = SoundOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sound-outlined': SoundOutlined
  }
}
