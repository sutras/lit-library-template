import CalendarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalendarTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('calendar-two-tone')
export default class CalendarTwoTone extends AntdIcon {
  iconDefinition = CalendarTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'calendar-two-tone': CalendarTwoTone
  }
}
