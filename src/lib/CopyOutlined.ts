import CopyOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('copy-outlined')
export default class CopyOutlined extends AntdIcon {
  iconDefinition = CopyOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'copy-outlined': CopyOutlined
  }
}
