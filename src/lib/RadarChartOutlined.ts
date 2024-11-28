import RadarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadarChartOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('radar-chart-outlined')
export default class RadarChartOutlined extends AntdIcon {
  iconDefinition = RadarChartOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'radar-chart-outlined': RadarChartOutlined
  }
}
