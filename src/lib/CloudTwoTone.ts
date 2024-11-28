import CloudTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('cloud-two-tone')
export default class CloudTwoTone extends AntdIcon {
  iconDefinition = CloudTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'cloud-two-tone': CloudTwoTone
  }
}
