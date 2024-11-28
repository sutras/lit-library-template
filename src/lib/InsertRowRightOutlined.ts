import InsertRowRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowRightOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('insert-row-right-outlined')
export default class InsertRowRightOutlined extends AntdIcon {
  iconDefinition = InsertRowRightOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'insert-row-right-outlined': InsertRowRightOutlined
  }
}
