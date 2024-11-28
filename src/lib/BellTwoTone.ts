import BellTwoToneSvg from '@ant-design/icons-svg/lib/asn/BellTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bell-two-tone')
export default class BellTwoTone extends AntdIcon {
  iconDefinition = BellTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bell-two-tone': BellTwoTone
  }
}
