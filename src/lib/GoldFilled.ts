import GoldFilledSvg from '@ant-design/icons-svg/lib/asn/GoldFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('gold-filled')
export default class GoldFilled extends AntdIcon {
  iconDefinition = GoldFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'gold-filled': GoldFilled
  }
}
