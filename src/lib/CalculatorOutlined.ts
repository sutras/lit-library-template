import CalculatorOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalculatorOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('calculator-outlined')
export default class CalculatorOutlined extends AntdIcon {
  iconDefinition = CalculatorOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'calculator-outlined': CalculatorOutlined
  }
}
