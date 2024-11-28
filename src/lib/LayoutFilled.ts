import LayoutFilledSvg from '@ant-design/icons-svg/lib/asn/LayoutFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('layout-filled')
export default class LayoutFilled extends AntdIcon {
  iconDefinition = LayoutFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-filled': LayoutFilled
  }
}
