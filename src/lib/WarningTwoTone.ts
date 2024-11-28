import WarningTwoToneSvg from '@ant-design/icons-svg/lib/asn/WarningTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('warning-two-tone')
export default class WarningTwoTone extends AntdIcon {
  iconDefinition = WarningTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'warning-two-tone': WarningTwoTone
  }
}
