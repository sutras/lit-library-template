import BellFilledSvg from '@ant-design/icons-svg/lib/asn/BellFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bell-filled')
export default class BellFilled extends AntdIcon {
  iconDefinition = BellFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bell-filled': BellFilled
  }
}
