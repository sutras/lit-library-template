import GoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoldOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('gold-outlined')
export default class GoldOutlined extends AntdIcon {
  iconDefinition = GoldOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'gold-outlined': GoldOutlined
  }
}
