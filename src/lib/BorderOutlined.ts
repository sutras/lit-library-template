import BorderOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('border-outlined')
export default class BorderOutlined extends AntdIcon {
  iconDefinition = BorderOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'border-outlined': BorderOutlined
  }
}
