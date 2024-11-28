import LikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/LikeTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('like-two-tone')
export default class LikeTwoTone extends AntdIcon {
  iconDefinition = LikeTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'like-two-tone': LikeTwoTone
  }
}
