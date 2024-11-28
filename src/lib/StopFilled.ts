import StopFilledSvg from '@ant-design/icons-svg/lib/asn/StopFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('stop-filled')
export default class StopFilled extends AntdIcon {
  iconDefinition = StopFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'stop-filled': StopFilled
  }
}
