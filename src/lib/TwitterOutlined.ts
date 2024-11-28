import TwitterOutlinedSvg from '@ant-design/icons-svg/lib/asn/TwitterOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('twitter-outlined')
export default class TwitterOutlined extends AntdIcon {
  iconDefinition = TwitterOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'twitter-outlined': TwitterOutlined
  }
}
