import MessageOutlinedSvg from '@ant-design/icons-svg/lib/asn/MessageOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('message-outlined')
export default class MessageOutlined extends AntdIcon {
  iconDefinition = MessageOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'message-outlined': MessageOutlined
  }
}
