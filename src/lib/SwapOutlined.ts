import SwapOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('swap-outlined')
export default class SwapOutlined extends AntdIcon {
  iconDefinition = SwapOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'swap-outlined': SwapOutlined
  }
}
