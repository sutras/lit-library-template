import SplitCellsOutlinedSvg from '@ant-design/icons-svg/lib/asn/SplitCellsOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('split-cells-outlined')
export default class SplitCellsOutlined extends AntdIcon {
  iconDefinition = SplitCellsOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'split-cells-outlined': SplitCellsOutlined
  }
}
