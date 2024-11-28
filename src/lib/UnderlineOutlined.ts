import UnderlineOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnderlineOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('underline-outlined')
export default class UnderlineOutlined extends AntdIcon {
  iconDefinition = UnderlineOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'underline-outlined': UnderlineOutlined
  }
}
