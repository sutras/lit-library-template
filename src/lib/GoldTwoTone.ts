import GoldTwoToneSvg from '@ant-design/icons-svg/lib/asn/GoldTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('gold-two-tone')
export default class GoldTwoTone extends AntdIcon {
  iconDefinition = GoldTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'gold-two-tone': GoldTwoTone
  }
}
