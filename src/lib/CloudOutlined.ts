import CloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('cloud-outlined')
export default class CloudOutlined extends AntdIcon {
  iconDefinition = CloudOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'cloud-outlined': CloudOutlined
  }
}
