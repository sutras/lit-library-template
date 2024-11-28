import WeiboSquareFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('weibo-square-filled')
export default class WeiboSquareFilled extends AntdIcon {
  iconDefinition = WeiboSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'weibo-square-filled': WeiboSquareFilled
  }
}
