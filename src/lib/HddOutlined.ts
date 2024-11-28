import HddOutlinedSvg from '@ant-design/icons-svg/lib/asn/HddOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('hdd-outlined')
export default class HddOutlined extends AntdIcon {
  iconDefinition = HddOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'hdd-outlined': HddOutlined
  }
}
