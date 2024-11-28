import FileTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('file-two-tone')
export default class FileTwoTone extends AntdIcon {
  iconDefinition = FileTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'file-two-tone': FileTwoTone
  }
}
