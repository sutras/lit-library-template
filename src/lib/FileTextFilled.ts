import FileTextFilledSvg from '@ant-design/icons-svg/lib/asn/FileTextFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-text-filled')
export default class FileTextFilled extends AntdIcon {
  iconDefinition = FileTextFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-text-filled': FileTextFilled
  }
}
