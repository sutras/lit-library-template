import BackwardFilledSvg from '@ant-design/icons-svg/lib/asn/BackwardFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('backward-filled')
export default class BackwardFilled extends AntdIcon {
  iconDefinition = BackwardFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'backward-filled': BackwardFilled
  }
}
