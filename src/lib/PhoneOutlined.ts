import PhoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/PhoneOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('phone-outlined')
export default class PhoneOutlined extends AntdIcon {
  iconDefinition = PhoneOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'phone-outlined': PhoneOutlined
  }
}
