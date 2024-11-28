import DownOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('down-outlined')
export default class DownOutlined extends AntdIcon {
  iconDefinition = DownOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'down-outlined': DownOutlined
  }
}
