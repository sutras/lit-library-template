import PhoneFilledSvg from '@ant-design/icons-svg/lib/asn/PhoneFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('phone-filled')
export default class PhoneFilled extends AntdIcon {
  iconDefinition = PhoneFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'phone-filled': PhoneFilled
  }
}
