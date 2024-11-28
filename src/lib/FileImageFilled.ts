import FileImageFilledSvg from '@ant-design/icons-svg/lib/asn/FileImageFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-image-filled')
export default class FileImageFilled extends AntdIcon {
  iconDefinition = FileImageFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-image-filled': FileImageFilled
  }
}
