import WeiboSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('weibo-square-outlined')
export default class WeiboSquareOutlined extends AntdIcon {
  iconDefinition = WeiboSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'weibo-square-outlined': WeiboSquareOutlined
  }
}
