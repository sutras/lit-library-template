import PrinterTwoToneSvg from '@ant-design/icons-svg/lib/asn/PrinterTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('printer-two-tone')
export default class PrinterTwoTone extends AntdIcon {
  iconDefinition = PrinterTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'printer-two-tone': PrinterTwoTone
  }
}
