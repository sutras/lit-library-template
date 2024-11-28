import PieChartFilledSvg from '@ant-design/icons-svg/lib/asn/PieChartFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('pie-chart-filled')
export default class PieChartFilled extends AntdIcon {
  iconDefinition = PieChartFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'pie-chart-filled': PieChartFilled
  }
}
