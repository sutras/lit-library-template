import FormatPainterFilledSvg from '@ant-design/icons-svg/lib/asn/FormatPainterFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('format-painter-filled')
export default class FormatPainterFilled extends AntdIcon {
  iconDefinition = FormatPainterFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'format-painter-filled': FormatPainterFilled
  }
}
