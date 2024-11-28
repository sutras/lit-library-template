import PushpinFilledSvg from '@ant-design/icons-svg/lib/asn/PushpinFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pushpin-filled')
export default class PushpinFilled extends AntdIcon {
  iconDefinition = PushpinFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pushpin-filled': PushpinFilled
  }
}
