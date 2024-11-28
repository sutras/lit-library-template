import GoogleCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('google-circle-filled')
export default class GoogleCircleFilled extends AntdIcon {
  iconDefinition = GoogleCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'google-circle-filled': GoogleCircleFilled
  }
}
