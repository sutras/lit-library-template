import UndoOutlinedSvg from '@ant-design/icons-svg/lib/asn/UndoOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('undo-outlined')
export default class UndoOutlined extends AntdIcon {
  iconDefinition = UndoOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'undo-outlined': UndoOutlined
  }
}
