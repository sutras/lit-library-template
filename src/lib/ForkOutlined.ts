import ForkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForkOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fork-outlined')
export default class ForkOutlined extends AntdIcon {
  iconDefinition = ForkOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fork-outlined': ForkOutlined
  }
}
