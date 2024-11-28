import ReconciliationOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReconciliationOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('reconciliation-outlined')
export default class ReconciliationOutlined extends AntdIcon {
  iconDefinition = ReconciliationOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'reconciliation-outlined': ReconciliationOutlined
  }
}
