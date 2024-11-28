import CheckCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('check-circle-outlined')
export default class CheckCircleOutlined extends AntdIcon {
  iconDefinition = CheckCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'check-circle-outlined': CheckCircleOutlined
  }
}
