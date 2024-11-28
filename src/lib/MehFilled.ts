import MehFilledSvg from '@ant-design/icons-svg/lib/asn/MehFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('meh-filled')
export default class MehFilled extends AntdIcon {
  iconDefinition = MehFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'meh-filled': MehFilled
  }
}
