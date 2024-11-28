import FileExcelFilledSvg from '@ant-design/icons-svg/lib/asn/FileExcelFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-excel-filled')
export default class FileExcelFilled extends AntdIcon {
  iconDefinition = FileExcelFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-excel-filled': FileExcelFilled
  }
}
