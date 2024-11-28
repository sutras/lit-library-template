import FolderFilledSvg from '@ant-design/icons-svg/lib/asn/FolderFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('folder-filled')
export default class FolderFilled extends AntdIcon {
  iconDefinition = FolderFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'folder-filled': FolderFilled
  }
}
