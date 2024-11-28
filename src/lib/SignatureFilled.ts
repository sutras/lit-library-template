import SignatureFilledSvg from '@ant-design/icons-svg/lib/asn/SignatureFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('signature-filled')
export default class SignatureFilled extends AntdIcon {
  iconDefinition = SignatureFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'signature-filled': SignatureFilled
  }
}
