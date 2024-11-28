import QrcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/QrcodeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('qrcode-outlined')
export default class QrcodeOutlined extends AntdIcon {
  iconDefinition = QrcodeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'qrcode-outlined': QrcodeOutlined
  }
}
