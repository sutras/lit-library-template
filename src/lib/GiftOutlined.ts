import GiftOutlinedSvg from '@ant-design/icons-svg/lib/asn/GiftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('gift-outlined')
export default class GiftOutlined extends AntdIcon {
  iconDefinition = GiftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'gift-outlined': GiftOutlined
  }
}
