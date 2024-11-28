import BorderBottomOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderBottomOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('border-bottom-outlined')
export default class BorderBottomOutlined extends AntdIcon {
  iconDefinition = BorderBottomOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'border-bottom-outlined': BorderBottomOutlined
  }
}
