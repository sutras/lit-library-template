import SunOutlinedSvg from '@ant-design/icons-svg/lib/asn/SunOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('sun-outlined')
export default class SunOutlined extends AntdIcon {
  iconDefinition = SunOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'sun-outlined': SunOutlined
  }
}
