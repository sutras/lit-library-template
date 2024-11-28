import SisternodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SisternodeOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sisternode-outlined')
export default class SisternodeOutlined extends AntdIcon {
  iconDefinition = SisternodeOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sisternode-outlined': SisternodeOutlined
  }
}
