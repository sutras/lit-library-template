import ProfileFilledSvg from '@ant-design/icons-svg/lib/asn/ProfileFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('profile-filled')
export default class ProfileFilled extends AntdIcon {
  iconDefinition = ProfileFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'profile-filled': ProfileFilled
  }
}
