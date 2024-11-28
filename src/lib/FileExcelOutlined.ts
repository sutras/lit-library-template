import FileExcelOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileExcelOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-excel-outlined')
export default class FileExcelOutlined extends AntdIcon {
  iconDefinition = FileExcelOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-excel-outlined': FileExcelOutlined
  }
}
