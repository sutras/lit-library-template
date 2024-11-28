import ClockCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ClockCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('clock-circle-two-tone')
export default class ClockCircleTwoTone extends AntdIcon {
  iconDefinition = ClockCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'clock-circle-two-tone': ClockCircleTwoTone
  }
}
