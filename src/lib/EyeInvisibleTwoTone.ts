import EyeInvisibleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('eye-invisible-two-tone')
export default class EyeInvisibleTwoTone extends AntdIcon {
  iconDefinition = EyeInvisibleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'eye-invisible-two-tone': EyeInvisibleTwoTone
  }
}
