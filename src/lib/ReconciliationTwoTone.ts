import ReconciliationTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReconciliationTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('reconciliation-two-tone')
export default class ReconciliationTwoTone extends AntdIcon {
  iconDefinition = ReconciliationTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'reconciliation-two-tone': ReconciliationTwoTone
  }
}
