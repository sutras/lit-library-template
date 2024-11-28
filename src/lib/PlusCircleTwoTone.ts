import PlusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlusCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('plus-circle-two-tone')
export default class PlusCircleTwoTone extends AntdIcon {
  iconDefinition = PlusCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'plus-circle-two-tone': PlusCircleTwoTone
  }
}
