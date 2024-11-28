import PlusSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlusSquareTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('plus-square-two-tone')
export default class PlusSquareTwoTone extends AntdIcon {
  iconDefinition = PlusSquareTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'plus-square-two-tone': PlusSquareTwoTone
  }
}
