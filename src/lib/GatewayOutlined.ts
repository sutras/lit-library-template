import GatewayOutlinedSvg from '@ant-design/icons-svg/lib/asn/GatewayOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('gateway-outlined')
export default class GatewayOutlined extends AntdIcon {
  iconDefinition = GatewayOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'gateway-outlined': GatewayOutlined
  }
}
