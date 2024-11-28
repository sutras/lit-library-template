import UsbFilledSvg from '@ant-design/icons-svg/lib/asn/UsbFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('usb-filled')
export default class UsbFilled extends AntdIcon {
  iconDefinition = UsbFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'usb-filled': UsbFilled
  }
}
