import SortDescendingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SortDescendingOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sort-descending-outlined')
export default class SortDescendingOutlined extends AntdIcon {
  iconDefinition = SortDescendingOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sort-descending-outlined': SortDescendingOutlined
  }
}
