import FileAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileAddTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-add-two-tone')
export default class FileAddTwoTone extends AntdIcon {
  iconDefinition = FileAddTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-add-two-tone': FileAddTwoTone
  }
}
