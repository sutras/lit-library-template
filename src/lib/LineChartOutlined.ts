import LineChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineChartOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('line-chart-outlined')
export default class LineChartOutlined extends AntdIcon {
  iconDefinition = LineChartOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'line-chart-outlined': LineChartOutlined
  }
}
