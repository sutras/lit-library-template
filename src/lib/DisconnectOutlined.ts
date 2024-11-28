import DisconnectOutlinedSvg from '@ant-design/icons-svg/lib/asn/DisconnectOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('disconnect-outlined')
export default class DisconnectOutlined extends AntdIcon {
  iconDefinition = DisconnectOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'disconnect-outlined': DisconnectOutlined
  }
}
