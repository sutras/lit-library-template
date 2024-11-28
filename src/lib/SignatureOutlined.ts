import SignatureOutlinedSvg from '@ant-design/icons-svg/lib/asn/SignatureOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('signature-outlined')
export default class SignatureOutlined extends AntdIcon {
  iconDefinition = SignatureOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'signature-outlined': SignatureOutlined
  }
}
