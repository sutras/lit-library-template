import EyeTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('eye-two-tone')
export default class EyeTwoTone extends AntdIcon {
  iconDefinition = EyeTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'eye-two-tone': EyeTwoTone
  }
}
