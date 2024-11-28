import FileJpgOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileJpgOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-jpg-outlined')
export default class FileJpgOutlined extends AntdIcon {
  iconDefinition = FileJpgOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-jpg-outlined': FileJpgOutlined
  }
}
