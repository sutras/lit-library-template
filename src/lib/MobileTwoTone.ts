import MobileTwoToneSvg from '@ant-design/icons-svg/lib/asn/MobileTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('mobile-two-tone')
export default class MobileTwoTone extends AntdIcon {
  iconDefinition = MobileTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'mobile-two-tone': MobileTwoTone
  }
}
