import AlertOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlertOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('alert-outlined')
export default class AlertOutlined extends AntdIcon {
  iconDefinition = AlertOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'alert-outlined': AlertOutlined
  }
}
