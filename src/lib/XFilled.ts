import XFilledSvg from '@ant-design/icons-svg/lib/asn/XFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('x-filled')
export default class XFilled extends AntdIcon {
  iconDefinition = XFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'x-filled': XFilled
  }
}
