import TikTokOutlinedSvg from '@ant-design/icons-svg/lib/asn/TikTokOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tik-tok-outlined')
export default class TikTokOutlined extends AntdIcon {
  iconDefinition = TikTokOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tik-tok-outlined': TikTokOutlined
  }
}
