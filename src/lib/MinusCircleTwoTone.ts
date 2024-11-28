import MinusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('minus-circle-two-tone')
export default class MinusCircleTwoTone extends AntdIcon {
  iconDefinition = MinusCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'minus-circle-two-tone': MinusCircleTwoTone
  }
}
