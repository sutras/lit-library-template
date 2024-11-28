import LinkedinFilledSvg from '@ant-design/icons-svg/lib/asn/LinkedinFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('linkedin-filled')
export default class LinkedinFilled extends AntdIcon {
  iconDefinition = LinkedinFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'linkedin-filled': LinkedinFilled
  }
}
