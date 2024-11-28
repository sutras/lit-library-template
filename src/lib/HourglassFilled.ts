import HourglassFilledSvg from '@ant-design/icons-svg/lib/asn/HourglassFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('hourglass-filled')
export default class HourglassFilled extends AntdIcon {
  iconDefinition = HourglassFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'hourglass-filled': HourglassFilled
  }
}
