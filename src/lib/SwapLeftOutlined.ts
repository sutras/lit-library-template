import SwapLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapLeftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('swap-left-outlined')
export default class SwapLeftOutlined extends AntdIcon {
  iconDefinition = SwapLeftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'swap-left-outlined': SwapLeftOutlined
  }
}
