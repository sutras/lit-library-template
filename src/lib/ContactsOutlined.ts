import ContactsOutlinedSvg from '@ant-design/icons-svg/lib/asn/ContactsOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('contacts-outlined')
export default class ContactsOutlined extends AntdIcon {
  iconDefinition = ContactsOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'contacts-outlined': ContactsOutlined
  }
}
