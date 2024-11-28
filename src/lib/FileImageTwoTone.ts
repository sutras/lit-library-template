import FileImageTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileImageTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-image-two-tone')
export default class FileImageTwoTone extends AntdIcon {
  iconDefinition = FileImageTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-image-two-tone': FileImageTwoTone
  }
}
