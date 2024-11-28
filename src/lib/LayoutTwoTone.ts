import LayoutTwoToneSvg from '@ant-design/icons-svg/lib/asn/LayoutTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('layout-two-tone')
export default class LayoutTwoTone extends AntdIcon {
  iconDefinition = LayoutTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'layout-two-tone': LayoutTwoTone
  }
}
