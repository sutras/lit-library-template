import WalletTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('wallet-two-tone')
export default class WalletTwoTone extends AntdIcon {
  iconDefinition = WalletTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'wallet-two-tone': WalletTwoTone
  }
}
