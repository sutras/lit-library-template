import SkinFilledSvg from '@ant-design/icons-svg/lib/asn/SkinFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('skin-filled')
export default class SkinFilled extends AntdIcon {
  iconDefinition = SkinFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'skin-filled': SkinFilled
  }
}
