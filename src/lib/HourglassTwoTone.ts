import HourglassTwoToneSvg from '@ant-design/icons-svg/lib/asn/HourglassTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('hourglass-two-tone')
export default class HourglassTwoTone extends AntdIcon {
  iconDefinition = HourglassTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'hourglass-two-tone': HourglassTwoTone
  }
}
