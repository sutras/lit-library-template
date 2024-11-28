import HeartFilledSvg from '@ant-design/icons-svg/lib/asn/HeartFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('heart-filled')
export default class HeartFilled extends AntdIcon {
  iconDefinition = HeartFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'heart-filled': HeartFilled
  }
}
