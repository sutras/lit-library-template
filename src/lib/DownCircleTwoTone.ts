import DownCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/DownCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('down-circle-two-tone')
export default class DownCircleTwoTone extends AntdIcon {
  iconDefinition = DownCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'down-circle-two-tone': DownCircleTwoTone
  }
}
