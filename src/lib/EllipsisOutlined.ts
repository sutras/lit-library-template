import EllipsisOutlinedSvg from '@ant-design/icons-svg/lib/asn/EllipsisOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ellipsis-outlined')
export default class EllipsisOutlined extends AntdIcon {
  iconDefinition = EllipsisOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ellipsis-outlined': EllipsisOutlined
  }
}
