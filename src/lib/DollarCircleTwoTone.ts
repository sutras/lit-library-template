import DollarCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dollar-circle-two-tone')
export default class DollarCircleTwoTone extends AntdIcon {
  iconDefinition = DollarCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dollar-circle-two-tone': DollarCircleTwoTone
  }
}
