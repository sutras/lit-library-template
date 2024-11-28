import FolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('folder-outlined')
export default class FolderOutlined extends AntdIcon {
  iconDefinition = FolderOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'folder-outlined': FolderOutlined
  }
}
