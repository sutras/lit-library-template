import TrophyTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrophyTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('trophy-two-tone')
export default class TrophyTwoTone extends AntdIcon {
  iconDefinition = TrophyTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'trophy-two-tone': TrophyTwoTone
  }
}
