import PayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PayCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pay-circle-filled')
export default class PayCircleFilled extends AntdIcon {
  iconDefinition = PayCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pay-circle-filled': PayCircleFilled
  }
}
