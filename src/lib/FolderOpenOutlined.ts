import FolderOpenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOpenOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('folder-open-outlined')
export default class FolderOpenOutlined extends AntdIcon {
  iconDefinition = FolderOpenOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'folder-open-outlined': FolderOpenOutlined
  }
}
