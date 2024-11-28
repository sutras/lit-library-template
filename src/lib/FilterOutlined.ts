import FilterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilterOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('filter-outlined')
export default class FilterOutlined extends AntdIcon {
  iconDefinition = FilterOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'filter-outlined': FilterOutlined
  }
}
