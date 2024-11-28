import FileProtectOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileProtectOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-protect-outlined')
export default class FileProtectOutlined extends AntdIcon {
  iconDefinition = FileProtectOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-protect-outlined': FileProtectOutlined
  }
}
