import ToolFilledSvg from '@ant-design/icons-svg/lib/asn/ToolFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tool-filled')
export default class ToolFilled extends AntdIcon {
  iconDefinition = ToolFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tool-filled': ToolFilled
  }
}
