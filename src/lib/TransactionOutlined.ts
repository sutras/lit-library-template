import TransactionOutlinedSvg from '@ant-design/icons-svg/lib/asn/TransactionOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('transaction-outlined')
export default class TransactionOutlined extends AntdIcon {
  iconDefinition = TransactionOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'transaction-outlined': TransactionOutlined
  }
}
