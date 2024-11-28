import MoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoreOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('more-outlined')
export default class MoreOutlined extends AntdIcon {
  iconDefinition = MoreOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'more-outlined': MoreOutlined
  }
}
