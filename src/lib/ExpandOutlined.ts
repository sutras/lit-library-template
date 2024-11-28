import ExpandOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('expand-outlined')
export default class ExpandOutlined extends AntdIcon {
  iconDefinition = ExpandOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'expand-outlined': ExpandOutlined
  }
}
