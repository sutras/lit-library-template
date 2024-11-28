import CrownTwoToneSvg from '@ant-design/icons-svg/lib/asn/CrownTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('crown-two-tone')
export default class CrownTwoTone extends AntdIcon {
  iconDefinition = CrownTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'crown-two-tone': CrownTwoTone
  }
}
