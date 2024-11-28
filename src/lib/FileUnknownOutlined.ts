import FileUnknownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileUnknownOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-unknown-outlined')
export default class FileUnknownOutlined extends AntdIcon {
  iconDefinition = FileUnknownOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-unknown-outlined': FileUnknownOutlined
  }
}
