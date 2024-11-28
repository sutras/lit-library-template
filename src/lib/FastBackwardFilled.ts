import FastBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastBackwardFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fast-backward-filled')
export default class FastBackwardFilled extends AntdIcon {
  iconDefinition = FastBackwardFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fast-backward-filled': FastBackwardFilled
  }
}
