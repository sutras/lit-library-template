import LeftSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('left-square-outlined')
export default class LeftSquareOutlined extends AntdIcon {
  iconDefinition = LeftSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'left-square-outlined': LeftSquareOutlined
  }
}
