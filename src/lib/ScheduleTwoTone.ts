import ScheduleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScheduleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('schedule-two-tone')
export default class ScheduleTwoTone extends AntdIcon {
  iconDefinition = ScheduleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'schedule-two-tone': ScheduleTwoTone
  }
}
