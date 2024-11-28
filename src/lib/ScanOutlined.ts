import ScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScanOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('scan-outlined')
export default class ScanOutlined extends AntdIcon {
  iconDefinition = ScanOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'scan-outlined': ScanOutlined
  }
}
