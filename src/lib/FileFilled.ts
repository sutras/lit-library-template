import FileFilledSvg from '@ant-design/icons-svg/lib/asn/FileFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-filled')
export default class FileFilled extends AntdIcon {
  iconDefinition = FileFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-filled': FileFilled
  }
}
