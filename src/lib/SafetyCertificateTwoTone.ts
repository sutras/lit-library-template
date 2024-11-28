import SafetyCertificateTwoToneSvg from '@ant-design/icons-svg/lib/asn/SafetyCertificateTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('safety-certificate-two-tone')
export default class SafetyCertificateTwoTone extends AntdIcon {
  iconDefinition = SafetyCertificateTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'safety-certificate-two-tone': SafetyCertificateTwoTone
  }
}
