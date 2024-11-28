import IdcardOutlinedSvg from '@ant-design/icons-svg/lib/asn/IdcardOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('idcard-outlined')
export default class IdcardOutlined extends AntdIcon {
  iconDefinition = IdcardOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'idcard-outlined': IdcardOutlined
  }
}
