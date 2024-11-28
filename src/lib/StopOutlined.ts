import StopOutlinedSvg from '@ant-design/icons-svg/lib/asn/StopOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('stop-outlined')
export default class StopOutlined extends AntdIcon {
  iconDefinition = StopOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'stop-outlined': StopOutlined
  }
}
