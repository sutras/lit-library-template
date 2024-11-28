import CheckOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('check-outlined')
export default class CheckOutlined extends AntdIcon {
  iconDefinition = CheckOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'check-outlined': CheckOutlined
  }
}
