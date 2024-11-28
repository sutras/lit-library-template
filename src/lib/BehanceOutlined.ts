import BehanceOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('behance-outlined')
export default class BehanceOutlined extends AntdIcon {
  iconDefinition = BehanceOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'behance-outlined': BehanceOutlined
  }
}
