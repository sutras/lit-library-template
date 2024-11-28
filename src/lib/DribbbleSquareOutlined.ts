import DribbbleSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dribbble-square-outlined')
export default class DribbbleSquareOutlined extends AntdIcon {
  iconDefinition = DribbbleSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dribbble-square-outlined': DribbbleSquareOutlined
  }
}
