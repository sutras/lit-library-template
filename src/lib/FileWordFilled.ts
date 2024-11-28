import FileWordFilledSvg from '@ant-design/icons-svg/lib/asn/FileWordFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-word-filled')
export default class FileWordFilled extends AntdIcon {
  iconDefinition = FileWordFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-word-filled': FileWordFilled
  }
}
