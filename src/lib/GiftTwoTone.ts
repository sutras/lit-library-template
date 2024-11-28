import GiftTwoToneSvg from '@ant-design/icons-svg/lib/asn/GiftTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('gift-two-tone')
export default class GiftTwoTone extends AntdIcon {
  iconDefinition = GiftTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'gift-two-tone': GiftTwoTone
  }
}
