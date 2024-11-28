import UploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/UploadOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('upload-outlined')
export default class UploadOutlined extends AntdIcon {
  iconDefinition = UploadOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'upload-outlined': UploadOutlined
  }
}
