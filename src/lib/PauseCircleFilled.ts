import PauseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PauseCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pause-circle-filled')
export default class PauseCircleFilled extends AntdIcon {
  iconDefinition = PauseCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pause-circle-filled': PauseCircleFilled
  }
}
