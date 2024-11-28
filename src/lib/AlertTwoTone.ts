import AlertTwoToneSvg from '@ant-design/icons-svg/lib/asn/AlertTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('alert-two-tone')
export default class AlertTwoTone extends AntdIcon {
  iconDefinition = AlertTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'alert-two-tone': AlertTwoTone
  }
}
