import HighlightTwoToneSvg from '@ant-design/icons-svg/lib/asn/HighlightTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('highlight-two-tone')
export default class HighlightTwoTone extends AntdIcon {
  iconDefinition = HighlightTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'highlight-two-tone': HighlightTwoTone
  }
}
