import GoogleOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoogleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('google-outlined')
export default class GoogleOutlined extends AntdIcon {
  iconDefinition = GoogleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'google-outlined': GoogleOutlined
  }
}
