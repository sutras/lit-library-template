import WalletFilledSvg from '@ant-design/icons-svg/lib/asn/WalletFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('wallet-filled')
export default class WalletFilled extends AntdIcon {
  iconDefinition = WalletFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'wallet-filled': WalletFilled
  }
}
