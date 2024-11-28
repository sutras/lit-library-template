import UsbTwoToneSvg from '@ant-design/icons-svg/lib/asn/UsbTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('usb-two-tone')
export default class UsbTwoTone extends AntdIcon {
  iconDefinition = UsbTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'usb-two-tone': UsbTwoTone
  }
}
