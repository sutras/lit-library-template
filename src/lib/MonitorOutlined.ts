import MonitorOutlinedSvg from '@ant-design/icons-svg/lib/asn/MonitorOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('monitor-outlined')
export default class MonitorOutlined extends AntdIcon {
  iconDefinition = MonitorOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'monitor-outlined': MonitorOutlined
  }
}
