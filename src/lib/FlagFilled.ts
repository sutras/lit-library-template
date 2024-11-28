import FlagFilledSvg from '@ant-design/icons-svg/lib/asn/FlagFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('flag-filled')
export default class FlagFilled extends AntdIcon {
  iconDefinition = FlagFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'flag-filled': FlagFilled
  }
}
