import FolderAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderAddTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('folder-add-two-tone')
export default class FolderAddTwoTone extends AntdIcon {
  iconDefinition = FolderAddTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'folder-add-two-tone': FolderAddTwoTone
  }
}
