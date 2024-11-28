import SafetyCertificateFilledSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('safety-certificate-filled')
export default class SafetyCertificateFilled extends AntdIcon {
  iconDefinition = SafetyCertificateFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'safety-certificate-filled': SafetyCertificateFilled
  }
}
