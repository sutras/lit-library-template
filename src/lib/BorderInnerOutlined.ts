import BorderInnerOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderInnerOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('border-inner-outlined')
export default class BorderInnerOutlined extends AntdIcon {
  iconDefinition = BorderInnerOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'border-inner-outlined': BorderInnerOutlined
  }
}
