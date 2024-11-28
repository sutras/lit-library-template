import ColumnWidthOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnWidthOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('column-width-outlined')
export default class ColumnWidthOutlined extends AntdIcon {
  iconDefinition = ColumnWidthOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'column-width-outlined': ColumnWidthOutlined
  }
}
