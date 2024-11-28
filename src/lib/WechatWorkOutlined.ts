import WechatWorkOutlinedSvg from '@ant-design/icons-svg/lib/asn/WechatWorkOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('wechat-work-outlined')
export default class WechatWorkOutlined extends AntdIcon {
  iconDefinition = WechatWorkOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'wechat-work-outlined': WechatWorkOutlined
  }
}
