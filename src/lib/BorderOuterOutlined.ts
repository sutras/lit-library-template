import BorderOuterOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOuterOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('border-outer-outlined')
export default class BorderOuterOutlined extends AntdIcon {
  iconDefinition = BorderOuterOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'border-outer-outlined': BorderOuterOutlined
  }
}
