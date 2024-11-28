import DragOutlinedSvg from '@ant-design/icons-svg/lib/asn/DragOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('drag-outlined')
export default class DragOutlined extends AntdIcon {
  iconDefinition = DragOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'drag-outlined': DragOutlined
  }
}
