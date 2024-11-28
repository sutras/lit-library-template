import DownSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('down-square-outlined')
export default class DownSquareOutlined extends AntdIcon {
  iconDefinition = DownSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'down-square-outlined': DownSquareOutlined
  }
}
