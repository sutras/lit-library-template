import ClockCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClockCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('clock-circle-outlined')
export default class ClockCircleOutlined extends AntdIcon {
  iconDefinition = ClockCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'clock-circle-outlined': ClockCircleOutlined
  }
}
