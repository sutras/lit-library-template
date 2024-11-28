import StopTwoToneSvg from '@ant-design/icons-svg/lib/asn/StopTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('stop-two-tone')
export default class StopTwoTone extends AntdIcon {
  iconDefinition = StopTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'stop-two-tone': StopTwoTone
  }
}
