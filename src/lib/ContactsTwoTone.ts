import ContactsTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContactsTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('contacts-two-tone')
export default class ContactsTwoTone extends AntdIcon {
  iconDefinition = ContactsTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'contacts-two-tone': ContactsTwoTone
  }
}
