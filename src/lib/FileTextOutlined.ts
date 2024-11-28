import FileTextOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileTextOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-text-outlined')
export default class FileTextOutlined extends AntdIcon {
  iconDefinition = FileTextOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-text-outlined': FileTextOutlined
  }
}
