import PieChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/PieChartOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pie-chart-outlined')
export default class PieChartOutlined extends AntdIcon {
  iconDefinition = PieChartOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pie-chart-outlined': PieChartOutlined
  }
}
