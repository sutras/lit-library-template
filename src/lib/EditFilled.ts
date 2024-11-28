import EditFilledSvg from '@ant-design/icons-svg/lib/asn/EditFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('edit-filled')
export default class EditFilled extends AntdIcon {
  iconDefinition = EditFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'edit-filled': EditFilled
  }
}
