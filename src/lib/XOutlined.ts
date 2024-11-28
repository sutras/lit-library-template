import XOutlinedSvg from '@ant-design/icons-svg/lib/asn/XOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('x-outlined')
export default class XOutlined extends AntdIcon {
  iconDefinition = XOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'x-outlined': XOutlined
  }
}
