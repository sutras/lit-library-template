import DollarCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DollarCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dollar-circle-filled')
export default class DollarCircleFilled extends AntdIcon {
  iconDefinition = DollarCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dollar-circle-filled': DollarCircleFilled
  }
}
