import FallOutlinedSvg from '@ant-design/icons-svg/lib/asn/FallOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('fall-outlined')
export default class FallOutlined extends AntdIcon {
  iconDefinition = FallOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'fall-outlined': FallOutlined
  }
}
