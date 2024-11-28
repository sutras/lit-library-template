import HighlightOutlinedSvg from '@ant-design/icons-svg/lib/asn/HighlightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('highlight-outlined')
export default class HighlightOutlined extends AntdIcon {
  iconDefinition = HighlightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'highlight-outlined': HighlightOutlined
  }
}
