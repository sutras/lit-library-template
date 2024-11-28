import FileExclamationFilledSvg from '@ant-design/icons-svg/lib/asn/FileExclamationFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-exclamation-filled')
export default class FileExclamationFilled extends AntdIcon {
  iconDefinition = FileExclamationFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-exclamation-filled': FileExclamationFilled
  }
}
