import MinusSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusSquareTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('minus-square-two-tone')
export default class MinusSquareTwoTone extends AntdIcon {
  iconDefinition = MinusSquareTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'minus-square-two-tone': MinusSquareTwoTone
  }
}
