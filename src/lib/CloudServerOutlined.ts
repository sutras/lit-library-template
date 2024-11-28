import CloudServerOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudServerOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('cloud-server-outlined')
export default class CloudServerOutlined extends AntdIcon {
  iconDefinition = CloudServerOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'cloud-server-outlined': CloudServerOutlined
  }
}
