import FontSizeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontSizeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('font-size-outlined')
export default class FontSizeOutlined extends AntdIcon {
  iconDefinition = FontSizeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'font-size-outlined': FontSizeOutlined
  }
}
