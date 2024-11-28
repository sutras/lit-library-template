import ExclamationOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('exclamation-outlined')
export default class ExclamationOutlined extends AntdIcon {
  iconDefinition = ExclamationOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'exclamation-outlined': ExclamationOutlined
  }
}
