import FilePptFilledSvg from '@ant-design/icons-svg/lib/asn/FilePptFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-ppt-filled')
export default class FilePptFilled extends AntdIcon {
  iconDefinition = FilePptFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-ppt-filled': FilePptFilled
  }
}
