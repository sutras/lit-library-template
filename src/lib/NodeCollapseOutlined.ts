import NodeCollapseOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeCollapseOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('node-collapse-outlined')
export default class NodeCollapseOutlined extends AntdIcon {
  iconDefinition = NodeCollapseOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'node-collapse-outlined': NodeCollapseOutlined
  }
}
