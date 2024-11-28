import WarningFilledSvg from '@ant-design/icons-svg/lib/asn/WarningFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('warning-filled')
export default class WarningFilled extends AntdIcon {
  iconDefinition = WarningFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'warning-filled': WarningFilled
  }
}
