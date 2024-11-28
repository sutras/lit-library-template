import MinusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MinusCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('minus-circle-filled')
export default class MinusCircleFilled extends AntdIcon {
  iconDefinition = MinusCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'minus-circle-filled': MinusCircleFilled
  }
}
