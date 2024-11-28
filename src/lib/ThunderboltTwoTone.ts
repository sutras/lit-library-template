import ThunderboltTwoToneSvg from '@ant-design/icons-svg/lib/asn/ThunderboltTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('thunderbolt-two-tone')
export default class ThunderboltTwoTone extends AntdIcon {
  iconDefinition = ThunderboltTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'thunderbolt-two-tone': ThunderboltTwoTone
  }
}
