import BgColorsOutlinedSvg from '@ant-design/icons-svg/lib/asn/BgColorsOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bg-colors-outlined')
export default class BgColorsOutlined extends AntdIcon {
  iconDefinition = BgColorsOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bg-colors-outlined': BgColorsOutlined
  }
}
