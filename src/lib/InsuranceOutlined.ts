import InsuranceOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsuranceOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('insurance-outlined')
export default class InsuranceOutlined extends AntdIcon {
  iconDefinition = InsuranceOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'insurance-outlined': InsuranceOutlined
  }
}
