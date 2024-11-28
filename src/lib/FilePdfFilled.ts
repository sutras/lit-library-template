import FilePdfFilledSvg from '@ant-design/icons-svg/lib/asn/FilePdfFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-pdf-filled')
export default class FilePdfFilled extends AntdIcon {
  iconDefinition = FilePdfFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-pdf-filled': FilePdfFilled
  }
}
