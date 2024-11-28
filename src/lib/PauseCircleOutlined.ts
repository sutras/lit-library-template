import PauseCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pause-circle-outlined')
export default class PauseCircleOutlined extends AntdIcon {
  iconDefinition = PauseCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pause-circle-outlined': PauseCircleOutlined
  }
}
