import MobileFilledSvg from '@ant-design/icons-svg/lib/asn/MobileFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('mobile-filled')
export default class MobileFilled extends AntdIcon {
  iconDefinition = MobileFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'mobile-filled': MobileFilled
  }
}
