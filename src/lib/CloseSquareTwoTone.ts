import CloseSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloseSquareTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('close-square-two-tone')
export default class CloseSquareTwoTone extends AntdIcon {
  iconDefinition = CloseSquareTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'close-square-two-tone': CloseSquareTwoTone
  }
}
