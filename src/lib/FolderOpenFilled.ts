import FolderOpenFilledSvg from '@ant-design/icons-svg/lib/asn/FolderOpenFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('folder-open-filled')
export default class FolderOpenFilled extends AntdIcon {
  iconDefinition = FolderOpenFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'folder-open-filled': FolderOpenFilled
  }
}
