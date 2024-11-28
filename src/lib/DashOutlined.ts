import DashOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dash-outlined')
export default class DashOutlined extends AntdIcon {
  iconDefinition = DashOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dash-outlined': DashOutlined
  }
}
