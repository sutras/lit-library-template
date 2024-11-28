import BoxPlotTwoToneSvg from '@ant-design/icons-svg/lib/asn/BoxPlotTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('box-plot-two-tone')
export default class BoxPlotTwoTone extends AntdIcon {
  iconDefinition = BoxPlotTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'box-plot-two-tone': BoxPlotTwoTone
  }
}
