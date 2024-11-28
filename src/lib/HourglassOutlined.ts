import HourglassOutlinedSvg from '@ant-design/icons-svg/lib/asn/HourglassOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('hourglass-outlined')
export default class HourglassOutlined extends AntdIcon {
  iconDefinition = HourglassOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'hourglass-outlined': HourglassOutlined
  }
}
