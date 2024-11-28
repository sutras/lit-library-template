import InboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/InboxOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('inbox-outlined')
export default class InboxOutlined extends AntdIcon {
  iconDefinition = InboxOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'inbox-outlined': InboxOutlined
  }
}
