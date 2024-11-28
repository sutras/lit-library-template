import ToolTwoToneSvg from '@ant-design/icons-svg/lib/asn/ToolTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tool-two-tone')
export default class ToolTwoTone extends AntdIcon {
  iconDefinition = ToolTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tool-two-tone': ToolTwoTone
  }
}
