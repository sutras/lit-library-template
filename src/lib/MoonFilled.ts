import MoonFilledSvg from '@ant-design/icons-svg/lib/asn/MoonFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('moon-filled')
export default class MoonFilled extends AntdIcon {
  iconDefinition = MoonFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'moon-filled': MoonFilled
  }
}
