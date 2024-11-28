import CalculatorFilledSvg from '@ant-design/icons-svg/lib/asn/CalculatorFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('calculator-filled')
export default class CalculatorFilled extends AntdIcon {
  iconDefinition = CalculatorFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'calculator-filled': CalculatorFilled
  }
}
