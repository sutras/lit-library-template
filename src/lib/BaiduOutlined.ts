import BaiduOutlinedSvg from '@ant-design/icons-svg/lib/asn/BaiduOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('baidu-outlined')
export default class BaiduOutlined extends AntdIcon {
  iconDefinition = BaiduOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'baidu-outlined': BaiduOutlined
  }
}
