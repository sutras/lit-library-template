import SortAscendingOutlinedSvg from '@ant-design/icons-svg/lib/asn/SortAscendingOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sort-ascending-outlined')
export default class SortAscendingOutlined extends AntdIcon {
  iconDefinition = SortAscendingOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sort-ascending-outlined': SortAscendingOutlined
  }
}
