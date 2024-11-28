import FileOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-outlined')
export default class FileOutlined extends AntdIcon {
  iconDefinition = FileOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-outlined': FileOutlined
  }
}
