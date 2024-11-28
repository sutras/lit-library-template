import WeiboOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('weibo-outlined')
export default class WeiboOutlined extends AntdIcon {
  iconDefinition = WeiboOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'weibo-outlined': WeiboOutlined
  }
}
