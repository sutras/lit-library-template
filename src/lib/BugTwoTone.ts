import BugTwoToneSvg from '@ant-design/icons-svg/lib/asn/BugTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bug-two-tone')
export default class BugTwoTone extends AntdIcon {
  iconDefinition = BugTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bug-two-tone': BugTwoTone
  }
}
