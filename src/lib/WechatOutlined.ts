import WechatOutlinedSvg from '@ant-design/icons-svg/lib/asn/WechatOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('wechat-outlined')
export default class WechatOutlined extends AntdIcon {
  iconDefinition = WechatOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'wechat-outlined': WechatOutlined
  }
}
