import DashboardOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashboardOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dashboard-outlined')
export default class DashboardOutlined extends AntdIcon {
  iconDefinition = DashboardOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dashboard-outlined': DashboardOutlined
  }
}
