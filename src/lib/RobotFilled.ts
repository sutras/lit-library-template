import RobotFilledSvg from '@ant-design/icons-svg/lib/asn/RobotFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('robot-filled')
export default class RobotFilled extends AntdIcon {
  iconDefinition = RobotFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'robot-filled': RobotFilled
  }
}
