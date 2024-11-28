import ScheduleFilledSvg from '@ant-design/icons-svg/lib/asn/ScheduleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('schedule-filled')
export default class ScheduleFilled extends AntdIcon {
  iconDefinition = ScheduleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'schedule-filled': ScheduleFilled
  }
}
