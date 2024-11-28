import FileUnknownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileUnknownTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-unknown-two-tone')
export default class FileUnknownTwoTone extends AntdIcon {
  iconDefinition = FileUnknownTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-unknown-two-tone': FileUnknownTwoTone
  }
}
