import TikTokFilledSvg from '@ant-design/icons-svg/lib/asn/TikTokFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tik-tok-filled')
export default class TikTokFilled extends AntdIcon {
  iconDefinition = TikTokFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tik-tok-filled': TikTokFilled
  }
}
