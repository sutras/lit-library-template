import FileAddFilledSvg from '@ant-design/icons-svg/lib/asn/FileAddFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-add-filled')
export default class FileAddFilled extends AntdIcon {
  iconDefinition = FileAddFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-add-filled': FileAddFilled
  }
}
