import FolderTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('folder-two-tone')
export default class FolderTwoTone extends AntdIcon {
  iconDefinition = FolderTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'folder-two-tone': FolderTwoTone
  }
}
