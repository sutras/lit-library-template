import DashboardFilledSvg from '@ant-design/icons-svg/lib/asn/DashboardFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dashboard-filled')
export default class DashboardFilled extends AntdIcon {
  iconDefinition = DashboardFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dashboard-filled': DashboardFilled
  }
}
