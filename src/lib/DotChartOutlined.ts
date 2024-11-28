import DotChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/DotChartOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('dot-chart-outlined')
export default class DotChartOutlined extends AntdIcon {
  iconDefinition = DotChartOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'dot-chart-outlined': DotChartOutlined
  }
}
