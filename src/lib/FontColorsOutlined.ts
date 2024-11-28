import FontColorsOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontColorsOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('font-colors-outlined')
export default class FontColorsOutlined extends AntdIcon {
  iconDefinition = FontColorsOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'font-colors-outlined': FontColorsOutlined
  }
}
