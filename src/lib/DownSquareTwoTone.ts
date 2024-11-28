import DownSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownSquareTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('down-square-two-tone')
export default class DownSquareTwoTone extends AntdIcon {
  iconDefinition = DownSquareTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'down-square-two-tone': DownSquareTwoTone
  }
}
