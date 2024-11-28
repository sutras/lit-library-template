import PhoneTwoToneSvg from '@ant-design/icons-svg/lib/asn/PhoneTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('phone-two-tone')
export default class PhoneTwoTone extends AntdIcon {
  iconDefinition = PhoneTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'phone-two-tone': PhoneTwoTone
  }
}
