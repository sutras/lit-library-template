import WarningOutlinedSvg from '@ant-design/icons-svg/lib/asn/WarningOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('warning-outlined')
export default class WarningOutlined extends AntdIcon {
  iconDefinition = WarningOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'warning-outlined': WarningOutlined
  }
}
