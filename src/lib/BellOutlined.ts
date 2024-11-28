import BellOutlinedSvg from '@ant-design/icons-svg/lib/asn/BellOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bell-outlined')
export default class BellOutlined extends AntdIcon {
  iconDefinition = BellOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bell-outlined': BellOutlined
  }
}
