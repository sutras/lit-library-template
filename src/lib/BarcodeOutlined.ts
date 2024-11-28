import BarcodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarcodeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('barcode-outlined')
export default class BarcodeOutlined extends AntdIcon {
  iconDefinition = BarcodeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'barcode-outlined': BarcodeOutlined
  }
}
