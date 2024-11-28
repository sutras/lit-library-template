import DeleteFilledSvg from '@ant-design/icons-svg/lib/asn/DeleteFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('delete-filled')
export default class DeleteFilled extends AntdIcon {
  iconDefinition = DeleteFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'delete-filled': DeleteFilled
  }
}
