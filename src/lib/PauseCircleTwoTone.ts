import PauseCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PauseCircleTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pause-circle-two-tone')
export default class PauseCircleTwoTone extends AntdIcon {
  iconDefinition = PauseCircleTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pause-circle-two-tone': PauseCircleTwoTone
  }
}
