import CopyTwoToneSvg from '@ant-design/icons-svg/lib/asn/CopyTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('copy-two-tone')
export default class CopyTwoTone extends AntdIcon {
  iconDefinition = CopyTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'copy-two-tone': CopyTwoTone
  }
}
