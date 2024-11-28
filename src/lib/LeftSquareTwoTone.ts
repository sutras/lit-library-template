import LeftSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/LeftSquareTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('left-square-two-tone')
export default class LeftSquareTwoTone extends AntdIcon {
  iconDefinition = LeftSquareTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'left-square-two-tone': LeftSquareTwoTone
  }
}
