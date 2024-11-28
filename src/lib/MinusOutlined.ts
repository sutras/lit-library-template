import MinusOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('minus-outlined')
export default class MinusOutlined extends AntdIcon {
  iconDefinition = MinusOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'minus-outlined': MinusOutlined
  }
}
