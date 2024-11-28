import HeartTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('heart-two-tone')
export default class HeartTwoTone extends AntdIcon {
  iconDefinition = HeartTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'heart-two-tone': HeartTwoTone
  }
}
