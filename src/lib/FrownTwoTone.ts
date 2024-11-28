import FrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FrownTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('frown-two-tone')
export default class FrownTwoTone extends AntdIcon {
  iconDefinition = FrownTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'frown-two-tone': FrownTwoTone
  }
}
