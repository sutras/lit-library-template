import WalletOutlinedSvg from '@ant-design/icons-svg/lib/asn/WalletOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('wallet-outlined')
export default class WalletOutlined extends AntdIcon {
  iconDefinition = WalletOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'wallet-outlined': WalletOutlined
  }
}
