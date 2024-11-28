import FileZipTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileZipTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-zip-two-tone')
export default class FileZipTwoTone extends AntdIcon {
  iconDefinition = FileZipTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-zip-two-tone': FileZipTwoTone
  }
}
