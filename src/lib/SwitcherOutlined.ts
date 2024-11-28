import SwitcherOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwitcherOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('switcher-outlined')
export default class SwitcherOutlined extends AntdIcon {
  iconDefinition = SwitcherOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'switcher-outlined': SwitcherOutlined
  }
}
