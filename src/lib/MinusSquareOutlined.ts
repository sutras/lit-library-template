import MinusSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('minus-square-outlined')
export default class MinusSquareOutlined extends AntdIcon {
  iconDefinition = MinusSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'minus-square-outlined': MinusSquareOutlined
  }
}
