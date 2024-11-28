import DatabaseTwoToneSvg from '@ant-design/icons-svg/lib/asn/DatabaseTwoTone'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('database-two-tone')
export default class DatabaseTwoTone extends AntdIcon {
  iconDefinition = DatabaseTwoToneSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'database-two-tone': DatabaseTwoTone
  }
}
