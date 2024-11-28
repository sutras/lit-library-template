import FileImageOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileImageOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-image-outlined')
export default class FileImageOutlined extends AntdIcon {
  iconDefinition = FileImageOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-image-outlined': FileImageOutlined
  }
}
