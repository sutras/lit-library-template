import RightSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('right-square-outlined')
export default class RightSquareOutlined extends AntdIcon {
  iconDefinition = RightSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'right-square-outlined': RightSquareOutlined
  }
}
