import CheckSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('check-square-outlined')
export default class CheckSquareOutlined extends AntdIcon {
  iconDefinition = CheckSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'check-square-outlined': CheckSquareOutlined
  }
}
