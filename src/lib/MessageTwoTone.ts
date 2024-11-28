import MessageTwoToneSvg from '@ant-design/icons-svg/lib/asn/MessageTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('message-two-tone')
export default class MessageTwoTone extends AntdIcon {
  iconDefinition = MessageTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'message-two-tone': MessageTwoTone
  }
}
