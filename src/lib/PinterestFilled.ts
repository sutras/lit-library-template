import PinterestFilledSvg from '@ant-design/icons-svg/lib/asn/PinterestFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pinterest-filled')
export default class PinterestFilled extends AntdIcon {
  iconDefinition = PinterestFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pinterest-filled': PinterestFilled
  }
}
