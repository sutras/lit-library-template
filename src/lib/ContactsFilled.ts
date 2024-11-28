import ContactsFilledSvg from '@ant-design/icons-svg/lib/asn/ContactsFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('contacts-filled')
export default class ContactsFilled extends AntdIcon {
  iconDefinition = ContactsFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'contacts-filled': ContactsFilled
  }
}
