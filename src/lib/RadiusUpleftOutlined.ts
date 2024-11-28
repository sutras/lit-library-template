import RadiusUpleftOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadiusUpleftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('radius-upleft-outlined')
export default class RadiusUpleftOutlined extends AntdIcon {
  iconDefinition = RadiusUpleftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'radius-upleft-outlined': RadiusUpleftOutlined
  }
}
