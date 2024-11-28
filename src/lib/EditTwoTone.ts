import EditTwoToneSvg from '@ant-design/icons-svg/lib/asn/EditTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('edit-two-tone')
export default class EditTwoTone extends AntdIcon {
  iconDefinition = EditTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'edit-two-tone': EditTwoTone
  }
}
