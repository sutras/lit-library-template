import PieChartTwoToneSvg from '@ant-design/icons-svg/lib/asn/PieChartTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pie-chart-two-tone')
export default class PieChartTwoTone extends AntdIcon {
  iconDefinition = PieChartTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pie-chart-two-tone': PieChartTwoTone
  }
}
