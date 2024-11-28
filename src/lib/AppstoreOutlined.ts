import AppstoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('appstore-outlined')
export default class AppstoreOutlined extends AntdIcon {
  iconDefinition = AppstoreOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'appstore-outlined': AppstoreOutlined
  }
}
