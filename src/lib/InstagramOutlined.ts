import InstagramOutlinedSvg from '@ant-design/icons-svg/lib/asn/InstagramOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('instagram-outlined')
export default class InstagramOutlined extends AntdIcon {
  iconDefinition = InstagramOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'instagram-outlined': InstagramOutlined
  }
}
