import ProfileOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProfileOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('profile-outlined')
export default class ProfileOutlined extends AntdIcon {
  iconDefinition = ProfileOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'profile-outlined': ProfileOutlined
  }
}
