import EyeInvisibleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('eye-invisible-outlined')
export default class EyeInvisibleOutlined extends AntdIcon {
  iconDefinition = EyeInvisibleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'eye-invisible-outlined': EyeInvisibleOutlined
  }
}
