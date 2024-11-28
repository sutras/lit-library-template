import PushpinTwoToneSvg from '@ant-design/icons-svg/lib/asn/PushpinTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pushpin-two-tone')
export default class PushpinTwoTone extends AntdIcon {
  iconDefinition = PushpinTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pushpin-two-tone': PushpinTwoTone
  }
}
