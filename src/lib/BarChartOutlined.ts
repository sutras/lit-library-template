import BarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarChartOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('bar-chart-outlined')
export default class BarChartOutlined extends AntdIcon {
  iconDefinition = BarChartOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'bar-chart-outlined': BarChartOutlined
  }
}
