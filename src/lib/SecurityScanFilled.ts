import SecurityScanFilledSvg from '@ant-design/icons-svg/lib/asn/SecurityScanFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('security-scan-filled')
export default class SecurityScanFilled extends AntdIcon {
  iconDefinition = SecurityScanFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'security-scan-filled': SecurityScanFilled
  }
}
