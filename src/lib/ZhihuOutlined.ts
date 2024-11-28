import ZhihuOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZhihuOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('zhihu-outlined')
export default class ZhihuOutlined extends AntdIcon {
  iconDefinition = ZhihuOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'zhihu-outlined': ZhihuOutlined
  }
}
