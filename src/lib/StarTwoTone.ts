import StarTwoToneSvg from '@ant-design/icons-svg/lib/asn/StarTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('star-two-tone')
export default class StarTwoTone extends AntdIcon {
  iconDefinition = StarTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'star-two-tone': StarTwoTone
  }
}
