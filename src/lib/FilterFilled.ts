import FilterFilledSvg from '@ant-design/icons-svg/lib/asn/FilterFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('filter-filled')
export default class FilterFilled extends AntdIcon {
  iconDefinition = FilterFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'filter-filled': FilterFilled
  }
}
