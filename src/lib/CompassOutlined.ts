import CompassOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompassOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('compass-outlined')
export default class CompassOutlined extends AntdIcon {
  iconDefinition = CompassOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'compass-outlined': CompassOutlined
  }
}
