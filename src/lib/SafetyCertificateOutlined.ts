import SafetyCertificateOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('safety-certificate-outlined')
export default class SafetyCertificateOutlined extends AntdIcon {
  iconDefinition = SafetyCertificateOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'safety-certificate-outlined': SafetyCertificateOutlined
  }
}
