import DotNetOutlinedSvg from '@ant-design/icons-svg/lib/asn/DotNetOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dot-net-outlined')
export default class DotNetOutlined extends AntdIcon {
  iconDefinition = DotNetOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dot-net-outlined': DotNetOutlined
  }
}
