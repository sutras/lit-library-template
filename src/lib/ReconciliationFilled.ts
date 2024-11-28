import ReconciliationFilledSvg from '@ant-design/icons-svg/lib/asn/ReconciliationFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('reconciliation-filled')
export default class ReconciliationFilled extends AntdIcon {
  iconDefinition = ReconciliationFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'reconciliation-filled': ReconciliationFilled
  }
}
