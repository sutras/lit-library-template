import ZhihuSquareFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuSquareFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('zhihu-square-filled')
export default class ZhihuSquareFilled extends AntdIcon {
  iconDefinition = ZhihuSquareFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'zhihu-square-filled': ZhihuSquareFilled
  }
}
