import FileWordOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileWordOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-word-outlined')
export default class FileWordOutlined extends AntdIcon {
  iconDefinition = FileWordOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-word-outlined': FileWordOutlined
  }
}
