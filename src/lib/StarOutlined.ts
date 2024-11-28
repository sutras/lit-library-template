import StarOutlinedSvg from '@ant-design/icons-svg/lib/asn/StarOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('star-outlined')
export default class StarOutlined extends AntdIcon {
  iconDefinition = StarOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'star-outlined': StarOutlined
  }
}
