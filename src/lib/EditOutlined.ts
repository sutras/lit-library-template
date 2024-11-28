import EditOutlinedSvg from '@ant-design/icons-svg/lib/asn/EditOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('edit-outlined')
export default class EditOutlined extends AntdIcon {
  iconDefinition = EditOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'edit-outlined': EditOutlined
  }
}
