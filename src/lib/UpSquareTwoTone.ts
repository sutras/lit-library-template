import UpSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpSquareTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('up-square-two-tone')
export default class UpSquareTwoTone extends AntdIcon {
  iconDefinition = UpSquareTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'up-square-two-tone': UpSquareTwoTone
  }
}
