import DashboardTwoToneSvg from '@ant-design/icons-svg/lib/asn/DashboardTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dashboard-two-tone')
export default class DashboardTwoTone extends AntdIcon {
  iconDefinition = DashboardTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dashboard-two-tone': DashboardTwoTone
  }
}
