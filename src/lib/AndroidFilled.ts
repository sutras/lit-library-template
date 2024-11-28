import AndroidFilledSvg from '@ant-design/icons-svg/lib/asn/AndroidFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('android-filled')
export default class AndroidFilled extends AntdIcon {
  iconDefinition = AndroidFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'android-filled': AndroidFilled
  }
}
