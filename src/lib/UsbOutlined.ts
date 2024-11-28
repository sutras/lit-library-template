import UsbOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsbOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('usb-outlined')
export default class UsbOutlined extends AntdIcon {
  iconDefinition = UsbOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'usb-outlined': UsbOutlined
  }
}
