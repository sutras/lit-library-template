import LaptopOutlinedSvg from '@ant-design/icons-svg/lib/asn/LaptopOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('laptop-outlined')
export default class LaptopOutlined extends AntdIcon {
  iconDefinition = LaptopOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'laptop-outlined': LaptopOutlined
  }
}
