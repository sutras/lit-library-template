import SearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SearchOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('search-outlined')
export default class SearchOutlined extends AntdIcon {
  iconDefinition = SearchOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'search-outlined': SearchOutlined
  }
}
