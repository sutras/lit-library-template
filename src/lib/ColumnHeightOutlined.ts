import ColumnHeightOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnHeightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('column-height-outlined')
export default class ColumnHeightOutlined extends AntdIcon {
  iconDefinition = ColumnHeightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'column-height-outlined': ColumnHeightOutlined
  }
}
