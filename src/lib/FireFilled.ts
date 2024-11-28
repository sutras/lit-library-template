import FireFilledSvg from '@ant-design/icons-svg/lib/asn/FireFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fire-filled')
export default class FireFilled extends AntdIcon {
  iconDefinition = FireFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fire-filled': FireFilled
  }
}
