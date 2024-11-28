import PrinterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PrinterOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('printer-outlined')
export default class PrinterOutlined extends AntdIcon {
  iconDefinition = PrinterOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'printer-outlined': PrinterOutlined
  }
}
