import CheckSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckSquareTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('check-square-two-tone')
export default class CheckSquareTwoTone extends AntdIcon {
  iconDefinition = CheckSquareTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'check-square-two-tone': CheckSquareTwoTone
  }
}
