import FileMarkdownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-markdown-two-tone')
export default class FileMarkdownTwoTone extends AntdIcon {
  iconDefinition = FileMarkdownTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-markdown-two-tone': FileMarkdownTwoTone
  }
}
