import SyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/SyncOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sync-outlined')
export default class SyncOutlined extends AntdIcon {
  iconDefinition = SyncOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sync-outlined': SyncOutlined
  }
}
