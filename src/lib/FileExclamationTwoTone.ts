import FileExclamationTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileExclamationTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-exclamation-two-tone')
export default class FileExclamationTwoTone extends AntdIcon {
  iconDefinition = FileExclamationTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-exclamation-two-tone': FileExclamationTwoTone
  }
}
