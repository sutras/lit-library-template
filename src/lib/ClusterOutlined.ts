import ClusterOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClusterOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('cluster-outlined')
export default class ClusterOutlined extends AntdIcon {
  iconDefinition = ClusterOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'cluster-outlined': ClusterOutlined
  }
}
