import FileWordTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileWordTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-word-two-tone')
export default class FileWordTwoTone extends AntdIcon {
  iconDefinition = FileWordTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-word-two-tone': FileWordTwoTone
  }
}
