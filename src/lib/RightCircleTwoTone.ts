import RightCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/RightCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('right-circle-two-tone')
export default class RightCircleTwoTone extends AntdIcon {
  iconDefinition = RightCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'right-circle-two-tone': RightCircleTwoTone
  }
}
