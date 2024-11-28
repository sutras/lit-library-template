import BankOutlinedSvg from '@ant-design/icons-svg/lib/asn/BankOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bank-outlined')
export default class BankOutlined extends AntdIcon {
  iconDefinition = BankOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bank-outlined': BankOutlined
  }
}
