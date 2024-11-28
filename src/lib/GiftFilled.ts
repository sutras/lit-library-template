import GiftFilledSvg from '@ant-design/icons-svg/lib/asn/GiftFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('gift-filled')
export default class GiftFilled extends AntdIcon {
  iconDefinition = GiftFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'gift-filled': GiftFilled
  }
}
