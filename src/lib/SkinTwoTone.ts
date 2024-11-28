import SkinTwoToneSvg from '@ant-design/icons-svg/lib/asn/SkinTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('skin-two-tone')
export default class SkinTwoTone extends AntdIcon {
  iconDefinition = SkinTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'skin-two-tone': SkinTwoTone
  }
}
