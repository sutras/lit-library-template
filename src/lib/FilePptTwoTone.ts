import FilePptTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilePptTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-ppt-two-tone')
export default class FilePptTwoTone extends AntdIcon {
  iconDefinition = FilePptTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-ppt-two-tone': FilePptTwoTone
  }
}
