import TrophyOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrophyOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('trophy-outlined')
export default class TrophyOutlined extends AntdIcon {
  iconDefinition = TrophyOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'trophy-outlined': TrophyOutlined
  }
}
