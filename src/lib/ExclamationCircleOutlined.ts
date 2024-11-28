import ExclamationCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('exclamation-circle-outlined')
export default class ExclamationCircleOutlined extends AntdIcon {
  iconDefinition = ExclamationCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'exclamation-circle-outlined': ExclamationCircleOutlined
  }
}
