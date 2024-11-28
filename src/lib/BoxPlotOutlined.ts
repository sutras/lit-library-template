import BoxPlotOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoxPlotOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('box-plot-outlined')
export default class BoxPlotOutlined extends AntdIcon {
  iconDefinition = BoxPlotOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'box-plot-outlined': BoxPlotOutlined
  }
}
