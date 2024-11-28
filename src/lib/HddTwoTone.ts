import HddTwoToneSvg from '@ant-design/icons-svg/lib/asn/HddTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('hdd-two-tone')
export default class HddTwoTone extends AntdIcon {
  iconDefinition = HddTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'hdd-two-tone': HddTwoTone
  }
}
