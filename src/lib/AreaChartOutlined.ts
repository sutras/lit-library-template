import AreaChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/AreaChartOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('area-chart-outlined')
export default class AreaChartOutlined extends AntdIcon {
  iconDefinition = AreaChartOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'area-chart-outlined': AreaChartOutlined
  }
}
