import FolderAddFilledSvg from '@ant-design/icons-svg/lib/asn/FolderAddFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('folder-add-filled')
export default class FolderAddFilled extends AntdIcon {
  iconDefinition = FolderAddFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'folder-add-filled': FolderAddFilled
  }
}
