import RollbackOutlinedSvg from '@ant-design/icons-svg/lib/asn/RollbackOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('rollback-outlined')
export default class RollbackOutlined extends AntdIcon {
  iconDefinition = RollbackOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'rollback-outlined': RollbackOutlined
  }
}
