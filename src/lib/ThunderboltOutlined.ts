import ThunderboltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ThunderboltOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('thunderbolt-outlined')
export default class ThunderboltOutlined extends AntdIcon {
  iconDefinition = ThunderboltOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'thunderbolt-outlined': ThunderboltOutlined
  }
}
