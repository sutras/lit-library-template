import ForwardFilledSvg from '@ant-design/icons-svg/lib/asn/ForwardFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('forward-filled')
export default class ForwardFilled extends AntdIcon {
  iconDefinition = ForwardFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'forward-filled': ForwardFilled
  }
}
