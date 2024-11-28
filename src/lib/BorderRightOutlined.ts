import BorderRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderRightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('border-right-outlined')
export default class BorderRightOutlined extends AntdIcon {
  iconDefinition = BorderRightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'border-right-outlined': BorderRightOutlined
  }
}
