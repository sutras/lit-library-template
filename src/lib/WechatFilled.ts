import WechatFilledSvg from '@ant-design/icons-svg/lib/asn/WechatFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('wechat-filled')
export default class WechatFilled extends AntdIcon {
  iconDefinition = WechatFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'wechat-filled': WechatFilled
  }
}
