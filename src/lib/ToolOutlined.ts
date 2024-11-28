import ToolOutlinedSvg from '@ant-design/icons-svg/lib/asn/ToolOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('tool-outlined')
export default class ToolOutlined extends AntdIcon {
  iconDefinition = ToolOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'tool-outlined': ToolOutlined
  }
}
