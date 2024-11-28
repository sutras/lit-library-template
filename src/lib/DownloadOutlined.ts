import DownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownloadOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('download-outlined')
export default class DownloadOutlined extends AntdIcon {
  iconDefinition = DownloadOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'download-outlined': DownloadOutlined
  }
}
