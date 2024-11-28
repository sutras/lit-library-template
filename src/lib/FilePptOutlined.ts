import FilePptOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePptOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-ppt-outlined')
export default class FilePptOutlined extends AntdIcon {
  iconDefinition = FilePptOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-ppt-outlined': FilePptOutlined
  }
}
