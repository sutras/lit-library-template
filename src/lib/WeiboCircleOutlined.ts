import WeiboCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('weibo-circle-outlined')
export default class WeiboCircleOutlined extends AntdIcon {
  iconDefinition = WeiboCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'weibo-circle-outlined': WeiboCircleOutlined
  }
}
