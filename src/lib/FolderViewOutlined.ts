import FolderViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderViewOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('folder-view-outlined')
export default class FolderViewOutlined extends AntdIcon {
  iconDefinition = FolderViewOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'folder-view-outlined': FolderViewOutlined
  }
}
