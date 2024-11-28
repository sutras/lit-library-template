import BorderTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderTopOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('border-top-outlined')
export default class BorderTopOutlined extends AntdIcon {
  iconDefinition = BorderTopOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'border-top-outlined': BorderTopOutlined
  }
}
