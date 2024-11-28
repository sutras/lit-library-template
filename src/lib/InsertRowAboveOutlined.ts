import InsertRowAboveOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowAboveOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('insert-row-above-outlined')
export default class InsertRowAboveOutlined extends AntdIcon {
  iconDefinition = InsertRowAboveOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'insert-row-above-outlined': InsertRowAboveOutlined
  }
}
