import NodeExpandOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeExpandOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('node-expand-outlined')
export default class NodeExpandOutlined extends AntdIcon {
  iconDefinition = NodeExpandOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'node-expand-outlined': NodeExpandOutlined
  }
}
