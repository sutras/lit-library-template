import FunnelPlotTwoToneSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('funnel-plot-two-tone')
export default class FunnelPlotTwoTone extends AntdIcon {
  iconDefinition = FunnelPlotTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'funnel-plot-two-tone': FunnelPlotTwoTone
  }
}
