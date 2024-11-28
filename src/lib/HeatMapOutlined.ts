import HeatMapOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeatMapOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('heat-map-outlined')
export default class HeatMapOutlined extends AntdIcon {
  iconDefinition = HeatMapOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'heat-map-outlined': HeatMapOutlined
  }
}
