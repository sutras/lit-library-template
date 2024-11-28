import FileZipFilledSvg from '@ant-design/icons-svg/lib/asn/FileZipFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-zip-filled')
export default class FileZipFilled extends AntdIcon {
  iconDefinition = FileZipFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-zip-filled': FileZipFilled
  }
}
