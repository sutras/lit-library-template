import ConsoleSqlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ConsoleSqlOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('console-sql-outlined')
export default class ConsoleSqlOutlined extends AntdIcon {
  iconDefinition = ConsoleSqlOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'console-sql-outlined': ConsoleSqlOutlined
  }
}
