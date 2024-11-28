import DeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('delete-outlined')
export default class DeleteOutlined extends AntdIcon {
  iconDefinition = DeleteOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'delete-outlined': DeleteOutlined
  }
}
