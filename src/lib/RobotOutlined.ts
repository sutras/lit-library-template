import RobotOutlinedSvg from '@ant-design/icons-svg/lib/asn/RobotOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('robot-outlined')
export default class RobotOutlined extends AntdIcon {
  iconDefinition = RobotOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'robot-outlined': RobotOutlined
  }
}
