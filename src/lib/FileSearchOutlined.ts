import FileSearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSearchOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-search-outlined')
export default class FileSearchOutlined extends AntdIcon {
  iconDefinition = FileSearchOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-search-outlined': FileSearchOutlined
  }
}
