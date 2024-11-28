import MobileOutlinedSvg from '@ant-design/icons-svg/lib/asn/MobileOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('mobile-outlined')
export default class MobileOutlined extends AntdIcon {
  iconDefinition = MobileOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'mobile-outlined': MobileOutlined
  }
}
