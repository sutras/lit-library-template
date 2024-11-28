import CalculatorTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalculatorTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('calculator-two-tone')
export default class CalculatorTwoTone extends AntdIcon {
  iconDefinition = CalculatorTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'calculator-two-tone': CalculatorTwoTone
  }
}
