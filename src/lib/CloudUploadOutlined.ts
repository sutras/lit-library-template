import CloudUploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudUploadOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('cloud-upload-outlined')
export default class CloudUploadOutlined extends AntdIcon {
  iconDefinition = CloudUploadOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'cloud-upload-outlined': CloudUploadOutlined
  }
}
