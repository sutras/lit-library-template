import FileTextTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTextTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-text-two-tone')
export default class FileTextTwoTone extends AntdIcon {
  iconDefinition = FileTextTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-text-two-tone': FileTextTwoTone
  }
}
