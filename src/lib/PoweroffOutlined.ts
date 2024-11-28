import PoweroffOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoweroffOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('poweroff-outlined')
export default class PoweroffOutlined extends AntdIcon {
  iconDefinition = PoweroffOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'poweroff-outlined': PoweroffOutlined
  }
}
