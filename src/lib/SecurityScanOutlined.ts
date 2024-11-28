import SecurityScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/SecurityScanOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('security-scan-outlined')
export default class SecurityScanOutlined extends AntdIcon {
  iconDefinition = SecurityScanOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'security-scan-outlined': SecurityScanOutlined
  }
}
