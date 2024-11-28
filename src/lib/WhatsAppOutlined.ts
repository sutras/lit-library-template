import WhatsAppOutlinedSvg from '@ant-design/icons-svg/lib/asn/WhatsAppOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('whats-app-outlined')
export default class WhatsAppOutlined extends AntdIcon {
  iconDefinition = WhatsAppOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'whats-app-outlined': WhatsAppOutlined
  }
}
