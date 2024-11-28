import FileMarkdownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-markdown-outlined')
export default class FileMarkdownOutlined extends AntdIcon {
  iconDefinition = FileMarkdownOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-markdown-outlined': FileMarkdownOutlined
  }
}
