import SubnodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SubnodeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('subnode-outlined')
export default class SubnodeOutlined extends AntdIcon {
  iconDefinition = SubnodeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'subnode-outlined': SubnodeOutlined
  }
}
