import MoonOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoonOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('moon-outlined')
export default class MoonOutlined extends AntdIcon {
  iconDefinition = MoonOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'moon-outlined': MoonOutlined
  }
}
