import InsertRowLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowLeftOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('insert-row-left-outlined')
export default class InsertRowLeftOutlined extends AntdIcon {
  iconDefinition = InsertRowLeftOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'insert-row-left-outlined': InsertRowLeftOutlined
  }
}
