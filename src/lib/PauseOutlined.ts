import PauseOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pause-outlined')
export default class PauseOutlined extends AntdIcon {
  iconDefinition = PauseOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pause-outlined': PauseOutlined
  }
}
