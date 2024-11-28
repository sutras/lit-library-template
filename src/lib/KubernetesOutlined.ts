import KubernetesOutlinedSvg from '@ant-design/icons-svg/lib/asn/KubernetesOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('kubernetes-outlined')
export default class KubernetesOutlined extends AntdIcon {
  iconDefinition = KubernetesOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'kubernetes-outlined': KubernetesOutlined
  }
}
