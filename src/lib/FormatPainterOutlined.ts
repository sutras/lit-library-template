import FormatPainterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormatPainterOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('format-painter-outlined')
export default class FormatPainterOutlined extends AntdIcon {
  iconDefinition = FormatPainterOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'format-painter-outlined': FormatPainterOutlined
  }
}
