import TrophyFilledSvg from '@ant-design/icons-svg/lib/asn/TrophyFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('trophy-filled')
export default class TrophyFilled extends AntdIcon {
  iconDefinition = TrophyFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'trophy-filled': TrophyFilled
  }
}
