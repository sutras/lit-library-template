import FileGifOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileGifOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-gif-outlined')
export default class FileGifOutlined extends AntdIcon {
  iconDefinition = FileGifOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-gif-outlined': FileGifOutlined
  }
}
