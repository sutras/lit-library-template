import DeleteRowOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeleteRowOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('delete-row-outlined')
export default class DeleteRowOutlined extends AntdIcon {
  iconDefinition = DeleteRowOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'delete-row-outlined': DeleteRowOutlined
  }
}
