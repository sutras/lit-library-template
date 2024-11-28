import CalendarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalendarOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('calendar-outlined')
export default class CalendarOutlined extends AntdIcon {
  iconDefinition = CalendarOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'calendar-outlined': CalendarOutlined
  }
}
