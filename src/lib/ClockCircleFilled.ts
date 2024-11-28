import ClockCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ClockCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('clock-circle-filled')
export default class ClockCircleFilled extends AntdIcon {
  iconDefinition = ClockCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'clock-circle-filled': ClockCircleFilled
  }
}
