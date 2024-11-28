import NodeIndexOutlinedSvg from '@ant-design/icons-svg/lib/asn/NodeIndexOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('node-index-outlined')
export default class NodeIndexOutlined extends AntdIcon {
  iconDefinition = NodeIndexOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'node-index-outlined': NodeIndexOutlined
  }
}
