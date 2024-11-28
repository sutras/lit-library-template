import AntCloudOutlinedSvg from '@ant-design/icons-svg/lib/asn/AntCloudOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('ant-cloud-outlined')
export default class AntCloudOutlined extends AntdIcon {
  iconDefinition = AntCloudOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'ant-cloud-outlined': AntCloudOutlined
  }
}
