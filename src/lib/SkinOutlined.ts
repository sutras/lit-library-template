import SkinOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkinOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('skin-outlined')
export default class SkinOutlined extends AntdIcon {
  iconDefinition = SkinOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'skin-outlined': SkinOutlined
  }
}
