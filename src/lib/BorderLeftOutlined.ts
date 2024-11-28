import BorderLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderLeftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('border-left-outlined')
export default class BorderLeftOutlined extends AntdIcon {
  iconDefinition = BorderLeftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'border-left-outlined': BorderLeftOutlined
  }
}
