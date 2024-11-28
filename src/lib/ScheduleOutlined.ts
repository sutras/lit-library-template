import ScheduleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScheduleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('schedule-outlined')
export default class ScheduleOutlined extends AntdIcon {
  iconDefinition = ScheduleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'schedule-outlined': ScheduleOutlined
  }
}
