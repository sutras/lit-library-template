import DeleteColumnOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteColumnOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('delete-column-outlined')
export default class DeleteColumnOutlined extends AntdIcon {
  iconDefinition = DeleteColumnOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'delete-column-outlined': DeleteColumnOutlined
  }
}
