import DatabaseFilledSvg from '@ant-design/icons-svg/lib/asn/DatabaseFilled'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('database-filled')
export default class DatabaseFilled extends AntdIcon {
  iconDefinition = DatabaseFilledSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'database-filled': DatabaseFilled
  }
}
