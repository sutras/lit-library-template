import MacCommandOutlinedSvg from '@ant-design/icons-svg/lib/asn/MacCommandOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('mac-command-outlined')
export default class MacCommandOutlined extends AntdIcon {
  iconDefinition = MacCommandOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'mac-command-outlined': MacCommandOutlined
  }
}
