import FilePdfTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePdfTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-pdf-two-tone')
export default class FilePdfTwoTone extends AntdIcon {
  iconDefinition = FilePdfTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-pdf-two-tone': FilePdfTwoTone
  }
}
