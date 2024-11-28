import FunnelPlotFilledSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('funnel-plot-filled')
export default class FunnelPlotFilled extends AntdIcon {
  iconDefinition = FunnelPlotFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'funnel-plot-filled': FunnelPlotFilled
  }
}
