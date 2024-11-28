import BugFilledSvg from '@ant-design/icons-svg/lib/asn/BugFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bug-filled')
export default class BugFilled extends AntdIcon {
  iconDefinition = BugFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bug-filled': BugFilled
  }
}
