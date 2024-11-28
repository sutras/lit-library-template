import CrownFilledSvg from '@ant-design/icons-svg/lib/asn/CrownFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('crown-filled')
export default class CrownFilled extends AntdIcon {
  iconDefinition = CrownFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'crown-filled': CrownFilled
  }
}
