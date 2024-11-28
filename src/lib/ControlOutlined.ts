import ControlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ControlOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('control-outlined')
export default class ControlOutlined extends AntdIcon {
  iconDefinition = ControlOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'control-outlined': ControlOutlined
  }
}
