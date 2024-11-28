import AuditOutlinedSvg from '@ant-design/icons-svg/lib/asn/AuditOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('audit-outlined')
export default class AuditOutlined extends AntdIcon {
  iconDefinition = AuditOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'audit-outlined': AuditOutlined
  }
}
