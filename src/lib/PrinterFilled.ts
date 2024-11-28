import PrinterFilledSvg from '@ant-design/icons-svg/lib/asn/PrinterFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('printer-filled')
export default class PrinterFilled extends AntdIcon {
  iconDefinition = PrinterFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'printer-filled': PrinterFilled
  }
}
