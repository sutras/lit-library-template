import LinkedinOutlinedSvg from '@ant-design/icons-svg/lib/asn/LinkedinOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('linkedin-outlined')
export default class LinkedinOutlined extends AntdIcon {
  iconDefinition = LinkedinOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'linkedin-outlined': LinkedinOutlined
  }
}
