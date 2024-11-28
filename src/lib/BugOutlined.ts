import BugOutlinedSvg from '@ant-design/icons-svg/lib/asn/BugOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bug-outlined')
export default class BugOutlined extends AntdIcon {
  iconDefinition = BugOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bug-outlined': BugOutlined
  }
}
