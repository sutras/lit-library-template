import LeftCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/LeftCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('left-circle-two-tone')
export default class LeftCircleTwoTone extends AntdIcon {
  iconDefinition = LeftCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'left-circle-two-tone': LeftCircleTwoTone
  }
}
