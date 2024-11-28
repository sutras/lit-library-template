import SendOutlinedSvg from '@ant-design/icons-svg/lib/asn/SendOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('send-outlined')
export default class SendOutlined extends AntdIcon {
  iconDefinition = SendOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'send-outlined': SendOutlined
  }
}
