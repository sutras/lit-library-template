import FireOutlinedSvg from '@ant-design/icons-svg/lib/asn/FireOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fire-outlined')
export default class FireOutlined extends AntdIcon {
  iconDefinition = FireOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fire-outlined': FireOutlined
  }
}
