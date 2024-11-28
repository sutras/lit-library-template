import CloudFilledSvg from '@ant-design/icons-svg/lib/asn/CloudFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('cloud-filled')
export default class CloudFilled extends AntdIcon {
  iconDefinition = CloudFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'cloud-filled': CloudFilled
  }
}
