import EyeOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('eye-outlined')
export default class EyeOutlined extends AntdIcon {
  iconDefinition = EyeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'eye-outlined': EyeOutlined
  }
}
