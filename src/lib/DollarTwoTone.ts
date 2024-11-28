import DollarTwoToneSvg from '@ant-design/icons-svg/lib/asn/DollarTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dollar-two-tone')
export default class DollarTwoTone extends AntdIcon {
  iconDefinition = DollarTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dollar-two-tone': DollarTwoTone
  }
}
