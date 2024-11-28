import FileExcelTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileExcelTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-excel-two-tone')
export default class FileExcelTwoTone extends AntdIcon {
  iconDefinition = FileExcelTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-excel-two-tone': FileExcelTwoTone
  }
}
