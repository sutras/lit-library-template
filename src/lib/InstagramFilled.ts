import InstagramFilledSvg from '@ant-design/icons-svg/lib/asn/InstagramFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('instagram-filled')
export default class InstagramFilled extends AntdIcon {
  iconDefinition = InstagramFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'instagram-filled': InstagramFilled
  }
}
