import InsertRowBelowOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowBelowOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('insert-row-below-outlined')
export default class InsertRowBelowOutlined extends AntdIcon {
  iconDefinition = InsertRowBelowOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'insert-row-below-outlined': InsertRowBelowOutlined
  }
}
