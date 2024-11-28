import MergeCellsOutlinedSvg from '@ant-design/icons-svg/lib/asn/MergeCellsOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('merge-cells-outlined')
export default class MergeCellsOutlined extends AntdIcon {
  iconDefinition = MergeCellsOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'merge-cells-outlined': MergeCellsOutlined
  }
}
