import FacebookOutlinedSvg from '@ant-design/icons-svg/lib/asn/FacebookOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('facebook-outlined')
export default class FacebookOutlined extends AntdIcon {
  iconDefinition = FacebookOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'facebook-outlined': FacebookOutlined
  }
}
