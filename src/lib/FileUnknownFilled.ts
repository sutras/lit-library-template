import FileUnknownFilledSvg from '@ant-design/icons-svg/lib/asn/FileUnknownFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-unknown-filled')
export default class FileUnknownFilled extends AntdIcon {
  iconDefinition = FileUnknownFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-unknown-filled': FileUnknownFilled
  }
}
