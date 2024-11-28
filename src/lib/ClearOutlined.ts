import ClearOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClearOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('clear-outlined')
export default class ClearOutlined extends AntdIcon {
  iconDefinition = ClearOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'clear-outlined': ClearOutlined
  }
}
