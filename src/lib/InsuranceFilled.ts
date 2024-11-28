import InsuranceFilledSvg from '@ant-design/icons-svg/lib/asn/InsuranceFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('insurance-filled')
export default class InsuranceFilled extends AntdIcon {
  iconDefinition = InsuranceFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'insurance-filled': InsuranceFilled
  }
}
