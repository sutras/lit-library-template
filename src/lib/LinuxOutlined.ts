import LinuxOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinuxOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('linux-outlined')
export default class LinuxOutlined extends AntdIcon {
  iconDefinition = LinuxOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'linux-outlined': LinuxOutlined
  }
}
