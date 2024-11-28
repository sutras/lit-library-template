import FacebookFilledSvg from '@ant-design/icons-svg/lib/asn/FacebookFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('facebook-filled')
export default class FacebookFilled extends AntdIcon {
  iconDefinition = FacebookFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'facebook-filled': FacebookFilled
  }
}
