import CloudDownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudDownloadOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('cloud-download-outlined')
export default class CloudDownloadOutlined extends AntdIcon {
  iconDefinition = CloudDownloadOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'cloud-download-outlined': CloudDownloadOutlined
  }
}
