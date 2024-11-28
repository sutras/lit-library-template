import MinusCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/MinusCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('minus-circle-outlined')
export default class MinusCircleOutlined extends AntdIcon {
  iconDefinition = MinusCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'minus-circle-outlined': MinusCircleOutlined
  }
}
