import BoxPlotFilledSvg from '@ant-design/icons-svg/lib/asn/BoxPlotFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('box-plot-filled')
export default class BoxPlotFilled extends AntdIcon {
  iconDefinition = BoxPlotFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'box-plot-filled': BoxPlotFilled
  }
}
