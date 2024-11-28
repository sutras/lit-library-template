import EyeInvisibleFilledSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('eye-invisible-filled')
export default class EyeInvisibleFilled extends AntdIcon {
  iconDefinition = EyeInvisibleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'eye-invisible-filled': EyeInvisibleFilled
  }
}
