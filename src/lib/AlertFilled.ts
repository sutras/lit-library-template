import AlertFilledSvg from '@ant-design/icons-svg/lib/asn/AlertFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('alert-filled')
export default class AlertFilled extends AntdIcon {
  iconDefinition = AlertFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'alert-filled': AlertFilled
  }
}
