import FileMarkdownFilledSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-markdown-filled')
export default class FileMarkdownFilled extends AntdIcon {
  iconDefinition = FileMarkdownFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-markdown-filled': FileMarkdownFilled
  }
}
