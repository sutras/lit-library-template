import UpSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('up-square-outlined')
export default class UpSquareOutlined extends AntdIcon {
  iconDefinition = UpSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'up-square-outlined': UpSquareOutlined
  }
}
