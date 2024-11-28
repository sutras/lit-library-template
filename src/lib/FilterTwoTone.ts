import FilterTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('filter-two-tone')
export default class FilterTwoTone extends AntdIcon {
  iconDefinition = FilterTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'filter-two-tone': FilterTwoTone
  }
}
