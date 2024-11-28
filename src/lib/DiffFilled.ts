import DiffFilledSvg from '@ant-design/icons-svg/lib/asn/DiffFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('diff-filled')
export default class DiffFilled extends AntdIcon {
  iconDefinition = DiffFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'diff-filled': DiffFilled
  }
}
