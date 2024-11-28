import BilibiliFilledSvg from '@ant-design/icons-svg/lib/asn/BilibiliFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bilibili-filled')
export default class BilibiliFilled extends AntdIcon {
  iconDefinition = BilibiliFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bilibili-filled': BilibiliFilled
  }
}
