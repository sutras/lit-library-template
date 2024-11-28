import FilePdfOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePdfOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-pdf-outlined')
export default class FilePdfOutlined extends AntdIcon {
  iconDefinition = FilePdfOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-pdf-outlined': FilePdfOutlined
  }
}
