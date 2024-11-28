import VerifiedOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerifiedOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('verified-outlined')
export default class VerifiedOutlined extends AntdIcon {
  iconDefinition = VerifiedOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'verified-outlined': VerifiedOutlined
  }
}
