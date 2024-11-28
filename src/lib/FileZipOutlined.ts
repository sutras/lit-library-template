import FileZipOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileZipOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-zip-outlined')
export default class FileZipOutlined extends AntdIcon {
  iconDefinition = FileZipOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-zip-outlined': FileZipOutlined
  }
}
