import FrownFilledSvg from '@ant-design/icons-svg/lib/asn/FrownFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('frown-filled')
export default class FrownFilled extends AntdIcon {
  iconDefinition = FrownFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'frown-filled': FrownFilled
  }
}
