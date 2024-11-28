import FastForwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastForwardFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fast-forward-filled')
export default class FastForwardFilled extends AntdIcon {
  iconDefinition = FastForwardFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fast-forward-filled': FastForwardFilled
  }
}
