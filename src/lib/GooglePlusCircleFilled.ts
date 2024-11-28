import GooglePlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GooglePlusCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('google-plus-circle-filled')
export default class GooglePlusCircleFilled extends AntdIcon {
  iconDefinition = GooglePlusCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'google-plus-circle-filled': GooglePlusCircleFilled
  }
}
