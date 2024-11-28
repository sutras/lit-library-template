import FolderAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderAddOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('folder-add-outlined')
export default class FolderAddOutlined extends AntdIcon {
  iconDefinition = FolderAddOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'folder-add-outlined': FolderAddOutlined
  }
}
