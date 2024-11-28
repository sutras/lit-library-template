import WechatWorkFilledSvg from '@ant-design/icons-svg/lib/asn/WechatWorkFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('wechat-work-filled')
export default class WechatWorkFilled extends AntdIcon {
  iconDefinition = WechatWorkFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'wechat-work-filled': WechatWorkFilled
  }
}
