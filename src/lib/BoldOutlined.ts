import BoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoldOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bold-outlined')
export default class BoldOutlined extends AntdIcon {
  iconDefinition = BoldOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bold-outlined': BoldOutlined
  }
}
