import AppleFilledSvg from '@ant-design/icons-svg/lib/asn/AppleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('apple-filled')
export default class AppleFilled extends AntdIcon {
  iconDefinition = AppleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'apple-filled': AppleFilled
  }
}
