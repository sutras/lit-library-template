import ExpandAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExpandAltOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('expand-alt-outlined')
export default class ExpandAltOutlined extends AntdIcon {
  iconDefinition = ExpandAltOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'expand-alt-outlined': ExpandAltOutlined
  }
}
