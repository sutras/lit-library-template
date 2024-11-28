import ProfileTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('profile-two-tone')
export default class ProfileTwoTone extends AntdIcon {
  iconDefinition = ProfileTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'profile-two-tone': ProfileTwoTone
  }
}
