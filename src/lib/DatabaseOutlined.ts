import DatabaseOutlinedSvg from '@ant-design/icons-svg/lib/asn/DatabaseOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('database-outlined')
export default class DatabaseOutlined extends AntdIcon {
  iconDefinition = DatabaseOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'database-outlined': DatabaseOutlined
  }
}
