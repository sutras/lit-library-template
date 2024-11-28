import FileAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileAddOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-add-outlined')
export default class FileAddOutlined extends AntdIcon {
  iconDefinition = FileAddOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-add-outlined': FileAddOutlined
  }
}
