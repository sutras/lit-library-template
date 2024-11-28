import WindowsOutlinedSvg from '@ant-design/icons-svg/lib/asn/WindowsOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('windows-outlined')
export default class WindowsOutlined extends AntdIcon {
  iconDefinition = WindowsOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'windows-outlined': WindowsOutlined
  }
}
