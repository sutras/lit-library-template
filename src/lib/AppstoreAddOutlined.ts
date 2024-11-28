import AppstoreAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreAddOutlined'
import { AntdIcon } from './components/AntdIcon'
import { customElement } from 'lit/decorators.js'

@customElement('appstore-add-outlined')
export default class AppstoreAddOutlined extends AntdIcon {
  iconDefinition = AppstoreAddOutlinedSvg
}

declare global {
  interface HTMLElementTagNameMap {
    'appstore-add-outlined': AppstoreAddOutlined
  }
}
