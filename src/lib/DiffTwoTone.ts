import DiffTwoToneSvg from '@ant-design/icons-svg/lib/asn/DiffTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('diff-two-tone')
export default class DiffTwoTone extends AntdIcon {
  iconDefinition = DiffTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'diff-two-tone': DiffTwoTone
  }
}
