import MessageFilledSvg from '@ant-design/icons-svg/lib/asn/MessageFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('message-filled')
export default class MessageFilled extends AntdIcon {
  iconDefinition = MessageFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'message-filled': MessageFilled
  }
}
