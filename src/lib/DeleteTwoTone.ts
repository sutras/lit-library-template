import DeleteTwoToneSvg from '@ant-design/icons-svg/lib/asn/DeleteTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('delete-two-tone')
export default class DeleteTwoTone extends AntdIcon {
  iconDefinition = DeleteTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'delete-two-tone': DeleteTwoTone
  }
}
