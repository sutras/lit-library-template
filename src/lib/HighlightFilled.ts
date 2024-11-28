import HighlightFilledSvg from '@ant-design/icons-svg/lib/asn/HighlightFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('highlight-filled')
export default class HighlightFilled extends AntdIcon {
  iconDefinition = HighlightFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'highlight-filled': HighlightFilled
  }
}
