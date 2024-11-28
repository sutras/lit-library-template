import TableOutlinedSvg from '@ant-design/icons-svg/lib/asn/TableOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('table-outlined')
export default class TableOutlined extends AntdIcon {
  iconDefinition = TableOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'table-outlined': TableOutlined
  }
}
