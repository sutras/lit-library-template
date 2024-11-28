import DesktopOutlinedSvg from '@ant-design/icons-svg/lib/asn/DesktopOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('desktop-outlined')
export default class DesktopOutlined extends AntdIcon {
  iconDefinition = DesktopOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'desktop-outlined': DesktopOutlined
  }
}
