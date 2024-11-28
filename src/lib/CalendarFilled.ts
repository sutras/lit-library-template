import CalendarFilledSvg from '@ant-design/icons-svg/lib/asn/CalendarFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('calendar-filled')
export default class CalendarFilled extends AntdIcon {
  iconDefinition = CalendarFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'calendar-filled': CalendarFilled
  }
}
