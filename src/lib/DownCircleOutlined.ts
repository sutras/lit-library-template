import DownCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownCircleOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('down-circle-outlined')
export default class DownCircleOutlined extends AntdIcon {
  iconDefinition = DownCircleOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'down-circle-outlined': DownCircleOutlined
  }
}
