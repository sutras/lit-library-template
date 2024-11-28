import SwapRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapRightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('swap-right-outlined')
export default class SwapRightOutlined extends AntdIcon {
  iconDefinition = SwapRightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'swap-right-outlined': SwapRightOutlined
  }
}
