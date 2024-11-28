import FunnelPlotOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('funnel-plot-outlined')
export default class FunnelPlotOutlined extends AntdIcon {
  iconDefinition = FunnelPlotOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'funnel-plot-outlined': FunnelPlotOutlined
  }
}
