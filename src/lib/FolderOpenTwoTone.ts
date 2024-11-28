import FolderOpenTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderOpenTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('folder-open-two-tone')
export default class FolderOpenTwoTone extends AntdIcon {
  iconDefinition = FolderOpenTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'folder-open-two-tone': FolderOpenTwoTone
  }
}
