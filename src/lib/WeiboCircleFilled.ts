import WeiboCircleFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('weibo-circle-filled')
export default class WeiboCircleFilled extends AntdIcon {
  iconDefinition = WeiboCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'weibo-circle-filled': WeiboCircleFilled
  }
}
