import RightSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightSquareTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('right-square-two-tone')
export default class RightSquareTwoTone extends AntdIcon {
  iconDefinition = RightSquareTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'right-square-two-tone': RightSquareTwoTone
  }
}
