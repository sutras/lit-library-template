import FileSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSyncOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-sync-outlined')
export default class FileSyncOutlined extends AntdIcon {
  iconDefinition = FileSyncOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-sync-outlined': FileSyncOutlined
  }
}
