import PayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PayCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pay-circle-outlined')
export default class PayCircleOutlined extends AntdIcon {
  iconDefinition = PayCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pay-circle-outlined': PayCircleOutlined
  }
}
