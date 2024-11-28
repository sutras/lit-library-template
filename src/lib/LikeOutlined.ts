import LikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/LikeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('like-outlined')
export default class LikeOutlined extends AntdIcon {
  iconDefinition = LikeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'like-outlined': LikeOutlined
  }
}
