import InsuranceTwoToneSvg from '@ant-design/icons-svg/lib/asn/InsuranceTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('insurance-two-tone')
export default class InsuranceTwoTone extends AntdIcon {
  iconDefinition = InsuranceTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'insurance-two-tone': InsuranceTwoTone
  }
}
