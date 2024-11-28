import ZhihuCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('zhihu-circle-filled')
export default class ZhihuCircleFilled extends AntdIcon {
  iconDefinition = ZhihuCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'zhihu-circle-filled': ZhihuCircleFilled
  }
}
