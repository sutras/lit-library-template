import UpCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('up-circle-two-tone')
export default class UpCircleTwoTone extends AntdIcon {
  iconDefinition = UpCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'up-circle-two-tone': UpCircleTwoTone
  }
}
