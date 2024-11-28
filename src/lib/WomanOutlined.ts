import WomanOutlinedSvg from '@ant-design/icons-svg/lib/asn/WomanOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('woman-outlined')
export default class WomanOutlined extends AntdIcon {
  iconDefinition = WomanOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'woman-outlined': WomanOutlined
  }
}
