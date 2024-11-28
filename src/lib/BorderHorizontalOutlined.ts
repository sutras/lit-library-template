import BorderHorizontalOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderHorizontalOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('border-horizontal-outlined')
export default class BorderHorizontalOutlined extends AntdIcon {
  iconDefinition = BorderHorizontalOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'border-horizontal-outlined': BorderHorizontalOutlined
  }
}
