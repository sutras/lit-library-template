import FileExclamationOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileExclamationOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-exclamation-outlined')
export default class FileExclamationOutlined extends AntdIcon {
  iconDefinition = FileExclamationOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-exclamation-outlined': FileExclamationOutlined
  }
}
