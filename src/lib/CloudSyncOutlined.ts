import CloudSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudSyncOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('cloud-sync-outlined')
export default class CloudSyncOutlined extends AntdIcon {
  iconDefinition = CloudSyncOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'cloud-sync-outlined': CloudSyncOutlined
  }
}
