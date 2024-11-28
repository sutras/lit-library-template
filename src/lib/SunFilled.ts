import SunFilledSvg from '@ant-design/icons-svg/lib/asn/SunFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sun-filled')
export default class SunFilled extends AntdIcon {
  iconDefinition = SunFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sun-filled': SunFilled
  }
}
