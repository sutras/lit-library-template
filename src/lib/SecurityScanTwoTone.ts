import SecurityScanTwoToneSvg from '@ant-design/icons-svg/lib/asn/SecurityScanTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('security-scan-two-tone')
export default class SecurityScanTwoTone extends AntdIcon {
  iconDefinition = SecurityScanTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'security-scan-two-tone': SecurityScanTwoTone
  }
}
