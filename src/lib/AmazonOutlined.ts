import AmazonOutlinedSvg from '@ant-design/icons-svg/lib/asn/AmazonOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('amazon-outlined')
export default class AmazonOutlined extends AntdIcon {
  iconDefinition = AmazonOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'amazon-outlined': AmazonOutlined
  }
}
