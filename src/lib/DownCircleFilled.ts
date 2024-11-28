import DownCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DownCircleFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('down-circle-filled')
export default class DownCircleFilled extends AntdIcon {
  iconDefinition = DownCircleFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'down-circle-filled': DownCircleFilled
  }
}
