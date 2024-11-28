import BehanceSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('behance-square-outlined')
export default class BehanceSquareOutlined extends AntdIcon {
  iconDefinition = BehanceSquareOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'behance-square-outlined': BehanceSquareOutlined
  }
}
