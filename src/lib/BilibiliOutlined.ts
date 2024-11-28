import BilibiliOutlinedSvg from '@ant-design/icons-svg/lib/asn/BilibiliOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bilibili-outlined')
export default class BilibiliOutlined extends AntdIcon {
  iconDefinition = BilibiliOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bilibili-outlined': BilibiliOutlined
  }
}
