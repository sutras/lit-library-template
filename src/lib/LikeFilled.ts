import LikeFilledSvg from '@ant-design/icons-svg/lib/asn/LikeFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('like-filled')
export default class LikeFilled extends AntdIcon {
  iconDefinition = LikeFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'like-filled': LikeFilled
  }
}
