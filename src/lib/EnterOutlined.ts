import EnterOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnterOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('enter-outlined')
export default class EnterOutlined extends AntdIcon {
  iconDefinition = EnterOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'enter-outlined': EnterOutlined
  }
}
